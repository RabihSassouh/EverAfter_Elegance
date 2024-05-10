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
