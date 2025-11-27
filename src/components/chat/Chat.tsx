import React, { useRef, useEffect, useState, type ChangeEvent } from 'react';

import styles from "../../styles/chat__styles/Chat.module.css";
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
        { id: '1', role: "user", content: 'Нове повідомлення', createdAt: 1702483200 + 86400 * 2, /* 2 дні пізніше */ },
        { id: '2', role: "ai", content: 'Відповідь ШІ', createdAt: 1702483200 + 86900 * 2 },
        { id: '3', role: "user", content: 'Повідомлення вчора', createdAt: 1702483200 + 86400 },
        { id: '4', role: "ai", content: 'Відповідь вчора', createdAt: 1702483200 + 86400 },
        { id: '5', role: "user", content: 'Старе повідомлення', createdAt: 1702483200 },
    ];

    return (
        <article className={styles.chat}>
            <div className={styles.main}>
                {messagesToDisplay.reverse().map((message, index) => {
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
                <div className={styles.messageInputItem}>
                    <textarea
                        ref={textareaRef}
                        value={chatInput}
                        onChange={handleChatInputChange}
                        maxLength={600}
                        id="chat-textarea"
                        rows={1} />
                    <button className={styles.sendBtn}><img src={SendIcon} alt="send" /></button>
                </div>

            </div>
        </article>
    )
}


export default Chat