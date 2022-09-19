import React, { useEffect} from 'react';
import { ChatBoxDiv } from "../../style/StyledChatComponents";
import { useAppSelector } from '../../hooks/storeHooks';
import Message from "./MessageLine";


const ChatBox = () => {
    const messages = useAppSelector(state => state.chat.messages);
    useEffect( () => {
        console.log('init chatbox');
    }, []);
    return (
        <ChatBoxDiv>
            {
                (messages.length)
                    ? messages.map((msg) => (
                        <Message
                            {...msg}
                            key={msg.stamp+msg.type}
                        />))
                    : ""
            }
        </ChatBoxDiv>
    )
};

export default ChatBox;
