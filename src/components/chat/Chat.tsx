import React, { useRef, useEffect, useState, type ChangeEvent, useLayoutEffect } from 'react';

import styles from "../../styles/chat__styles/Chat.module.css";

import ChibiIcon from '../../assets/icon/chat-icon/chibi.jpg';
import SendIcon from '../../assets/icon/chat-icon/send.svg';

import ChatMessage from './ChatMessage';
import { formatDateSeparator, shouldShowDateSeparator } from '../../utils/dateUtils.ts';

import type { ChatProps } from '../../types/chat.types.ts';
import { fetchSendMessage } from '../../api/chatApi.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loader from '../loader/Loader.tsx';

const Chat: React.FC<ChatProps> = ({ messages, nextCursor }) => {

    const [chatInput, setChatInput] = useState("");
    const handleChatInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => { setChatInput(event.target.value); };

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const scrollEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (textareaRef.current) {
            const element = textareaRef.current;
            element.style.height = 'auto';
            element.style.height = `${element.scrollHeight > 121 ? 121 : element.scrollHeight}px`;
            element.style.overflowY = element.scrollHeight > 121 ? 'scroll' : 'hidden';
        }
    }, [chatInput]);

    const scrollToBottom = () => {
        scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useLayoutEffect(() => {
        requestAnimationFrame(() => scrollToBottom());
    }, [messages]);

    const queryClient = useQueryClient();
    const sendMutation = useMutation({
        mutationFn: (content: string) =>
            fetchSendMessage("/send", content),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["messages"] });
            setChatInput("");
        },
        onError: (error: Error) => {
            console.error("Send error:", error.message);
        },
    });

    const handleSend = () => {
        if (sendMutation.isPending) return;
        const text = chatInput.trim();
        if (!text) return;
        sendMutation.mutate(text);
    };

    return (
        <article className={styles.chat}>
            <div className={styles.chibi}>
                <img src={ChibiIcon} alt="chibi icon" />
                {sendMutation.isPending && <Loader />}
            </div>
            <div className={styles.main} >
                {messages.length ? [...messages].reverse().map((message, index) => {
                    const prevMessage = messages[index - 1];
                    const prevTimestamp = prevMessage ? prevMessage.createdAt : undefined;

                    const showSeparator = shouldShowDateSeparator(message.createdAt, prevTimestamp);

                    return (
                        <React.Fragment key={message._id}>
                            {showSeparator && (
                                <h4 className={styles.date}>{formatDateSeparator(message.createdAt)}</h4>
                            )}
                            <ChatMessage
                                {...message}
                            />
                        </React.Fragment>
                    );
                }) : <h1>No messages found</h1>}
                <div ref={scrollEndRef}></div>
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
                <button className={styles.sendButton}
                    onClick={handleSend}
                    disabled={sendMutation.isPending}>
                    <img src={SendIcon} alt="send" />
                </button>
            </div>
        </article>
    )
}


export default Chat