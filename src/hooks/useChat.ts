import React, {useCallback, useState} from "react";
import { useEffect, useRef } from "react";
import env from "../modules/conf";
import { addMessage } from "../store/chatSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {SendMessageType} from "../interfaces/chatInterfaces";

const useChat = () => {
    const [isConnected, setIsConnected] = useState(false)
    const socket = useRef<null | WebSocket>(null);
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.chat.userId);
    const contactId = useAppSelector((state) => state.chat.contactId);


    const connectToSocket = () => {
        const path = `${env.wsHost}?userId=${userId}`;
        socket.current = new WebSocket(path);
        socket.current.onopen = () => {
            console.log('connected');
            setIsConnected(true);
        }
        socket.current.onclose = () => {
            console.log('disconnected');
            setIsConnected(false);
            setTimeout(() => {
                if (!isConnected) { connectToSocket(); }
            }, 2000);
            socket.current = null;
        };
        socket.current.onmessage = (msg) => {
            console.log(msg);
            dispatch(addMessage({type: 'CP', stamp: +(new Date()), message: msg.data}));
        }
    }

    useEffect(() => {
        console.log('useChat', socket.current);
        if (!socket.current) { connectToSocket(); }
        return () => {
            console.log('sok current', socket.current);
            console.log('sok current', socket.current && socket.current.readyState);
            if (socket.current && socket.current.readyState === 1) { socket.current.close(); }
        };
    }, [userId, contactId]);

    const sendMessage = useCallback((text:string, messageType:SendMessageType='MSG') => {
        if (socket.current) {
            console.log(text);
            const message = {
                message: text,
                stamp: +(new Date()),
                type: messageType,
                contact: contactId,
            };
            socket.current.send(JSON.stringify(message));
        }
    }, [userId, contactId]);
    return { sendMessage }
};

export default useChat;
