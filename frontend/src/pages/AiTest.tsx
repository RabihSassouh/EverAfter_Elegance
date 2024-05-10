import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, MessagePayload, MessageType, TypingIndicator } from '@chatscope/chat-ui-kit-react';

type MessageDirection = "incoming" | "outgoing" | 0 | 1;


interface MessageModel {
    message?:string;
    sentTime?:string;
    sender?:string;
    direction: MessageDirection;
    position: "single" | "first" | "normal" | "last" | 0 |  1 | 2 | 3;
    type?: MessageType;
    payload?: MessagePayload;
}

const AiTest: React.FC = () => {
    const [typing,setTyping]= useState(false);
    const [messages, setMessages] = useState<MessageModel[]>([
        {
            message: "Hello from chatgpt",
            sender: "AI",
            direction: "incoming",
            position: "single"
        }
    ]);

    const handleSend = async (message: string) => {
        const newMessage: MessageModel = {
            message: message,
            sender: "user",
            direction: "outgoing",
            position: "single"
        }
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);

    }


    return (
                <div>
                    <div style={{ position: "relative", height: "600px", width: "700px" }}>
                        <MainContainer>
                            <ChatContainer>
                                <MessageList
                                typingIndicator={typing ? <TypingIndicator content="typing"/> : null}
                                >
                                    {messages.map((message, i) => (
                                        <Message key={i} model={message as MessageModel} />
                                    ))}
                                </MessageList>
                                <MessageInput placeholder='Type msg here' onSend={handleSend}/>
                            </ChatContainer>
                        </MainContainer>
                    </div>
                </div>
            );
        }
        
        export default AiTest;
        


