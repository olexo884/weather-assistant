import React, { useRef, useEffect, useState, type ChangeEvent } from 'react';

import styles from "../../styles/chat__styles/Chat.module.css";

import ChibiIcon from '../../assets/icon/chat-icon/chibi.jpg';
import SendIcon from '../../assets/icon/chat-icon/send.svg';

import ChatMessage from './ChatMessage';
import { formatDateSeparator, shouldShowDateSeparator } from '../../utils/dateUtils.ts';

const Chat: React.FC = () => {
    const [chatInput, setChatInput] = useState("");

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            const element = textareaRef.current;
            element.style.height = 'auto';
            element.style.height = `${element.scrollHeight > 121 ? 121 : element.scrollHeight}px`;
            element.style.overflowY = element.scrollHeight > 121 ? 'scroll' : 'hidden';
        }
    }, [chatInput]);

    const handleChatInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => { setChatInput(event.target.value); };

    const messagesToDisplay = [
        { id: '1', role: "user", content: "Hi chibi!", createdAt: 1702483200 + 86900 },
        { id: '2', role: "ai", content: "Hello! How may I help you today?", createdAt: 1702483200 + 86400}
    ];

    return (
        <article className={styles.chat}>
            <div className={styles.chibi}>
                <img src={ChibiIcon} alt="chibi icon" />
            </div>
            <div className={styles.main}>
                {messagesToDisplay.map((message, index) => {
                    const prevMessage = messagesToDisplay[index - 1];
                    const prevTimestamp = prevMessage ? prevMessage.createdAt : undefined;

                    const showSeparator = shouldShowDateSeparator(message.createdAt, prevTimestamp);

                    return (
                        <React.Fragment key={message.id}>
                            {showSeparator && (
                                <h4 className={styles.date}>{formatDateSeparator(message.createdAt)}</h4>
                            )}
                            <ChatMessage
                                {...message}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
            <div className={styles.messageInput}>
                <textarea
                    placeholder='Enter a message to the chibi...'
                    ref={textareaRef}
                    value={chatInput}
                    onChange={handleChatInputChange}
                    maxLength={600}
                    id="chat-textarea"
                    rows={1} />
                <button className={styles.sendButton}><img src={SendIcon} alt="send" /></button>
            </div>
        </article>
    )
}


export default Chat