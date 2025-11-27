import React from 'react';
import styles from "../../styles/chat__styles/Chat.module.css";

export interface MessageProps {
    id: string;
    role: "user" | "ai"; 
    content: string;
    createdAt: number;
}

const ChatMessage: React.FC<MessageProps> = ({ role, content, createdAt }) => {
    const timeString = new Date(createdAt * 1000).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
    const containerClass = role === 'user' ? styles.singleMessageRight : styles.singleMessageLeft;

    return (
        <div className={containerClass}>
            <h4 className={styles.message}>{content}</h4>
            <p className={styles.time}>{timeString}</p>
        </div>
    );
};

export default ChatMessage;