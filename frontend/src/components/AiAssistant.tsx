import React, { useState, useRef, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, MessageList, Message, MessageInput, MessagePayload, MessageType, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { FaCommentAlt, FaTimes } from 'react-icons/fa';
const API_key = import.meta.env.VITE_API_KEY;

type MessageDirection = "incoming" | "outgoing" | 0 | 1;

interface MessageModel {
    message?: string;
    sentTime?: string;
    sender?: string;
    direction: MessageDirection;
    position: "single" | "first" | "normal" | "last" | 0 | 1 | 2 | 3;
    type?: MessageType;
    payload?: MessagePayload;
}


const Ai: React.FC = () => {
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState<MessageModel[]>([
        {
            message: "Welcome to EverAfter Elegance!",
            sender: "AI",
            direction: "incoming",
            position: "single"
        }
    ]);

    const [minimized, setMinimized] = useState(true);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const handleSend = async (message: string) => {
        const newMessage: MessageModel = {
            message: message,
            sender: "user",
            direction: "outgoing",
            position: "single"
        }
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        setTyping(true);
        await processMessageToAI(newMessages);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (chatContainerRef.current && !chatContainerRef.current.contains(event.target as Node)) {
            // Close the chat
            // You can add your own logic here
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    async function processMessageToAI(chatMessages: MessageModel[]) {
        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "AI") {
                role = "assistant"
            } else {
                role = "user"
            }
            return { role: role, content: messageObject.message }
        });
        const systemMessage = {
            role: "system",
            content: "For this session, you are a wedding planner website and you should only answer questions related to wedding. This includes topics like vendors, honey moons, best places to visit for honeymoon, in addition, you should help users to plan their wedding and give them advices to make their wedding day better. In addition you need to give the users advice on how to use their budget to get the most out of it so that they can have the best wedding possible. In addition you can answer business owners and vendors on how to make their business better. Please ignore any questions that are not related to these topics."
        }
        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ]
        }
        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_key,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data: any) => {
            console.log(data);
            console.log(data.choices[0].message.content);
            setMessages(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "AI",
                    direction: "incoming",
                    position: "single"
                }]
            );
            setTyping(false);
        })
    }

    const handleMinimize = () => {
        setMinimized(!minimized);
    }

  
 
    return (
        <div>
            <div className={`fixed bottom-0 right-0 transition-all ${minimized ? "h-0" : "h-[500px]"} w-[400px]`}>
                <MainContainer>
                    <div ref={chatContainerRef} className="flex flex-col h-full" >
                        {!minimized && (
                            <>
                                <div className="flex-grow overflow-y-auto w-full" style={{width:400}}>
                                    <MessageList className="w-full" style={{width:400}} typingIndicator={typing ? <TypingIndicator content="typing" /> : null}>
                                        {messages.map((message, i) => (
                                            <Message key={i} model={message as MessageModel} />
                                        ))}
                                    </MessageList>
                                </div>
                                <div className="fixed bottom-0 w-full bg-white">
                                    <MessageInput
                                        style={{width:350}}
                                        placeholder="Type msg here"
                                        onSend={handleSend}
                                    />
                                </div>
                            </>
                        )}
                        {minimized && (
                            <div>
                                <button onClick={handleMinimize} className="fixed bottom-5 right-5 z-50">
                                    <FaCommentAlt />
                                </button>
                            </div>
                        )}
                    </div>
                </MainContainer>
            </div>
            {!minimized && (
                <button onClick={handleMinimize} className="fixed bottom-5 right-5 z-50">
                    <FaTimes />
                </button>
            )}
        </div>
    );

}

export default Ai;
