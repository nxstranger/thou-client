import React, { useEffect} from 'react';
import { ChatBoxDiv } from "../styled/StyledChatComponents";
import { useAppSelector } from '../store/hooks';
import Message from "./MessageLine";


const ChatBox = () => {
    const messages = useAppSelector(state => state.chat.messages);
    // const messages = []
    useEffect( () => {
        console.log('init chatbox');
    }, []);
    // const dispatch = useDispatch()
    return (
        <ChatBoxDiv>
            {
                (messages.length)
                    ? messages.map((msg) => (
                        <Message
                            stamp={msg.stamp}
                            type={msg.type}
                            message={msg.message}
                            key={msg.stamp}
                        />))
                    : ""
            }
        </ChatBoxDiv>
    )
};

export default ChatBox;
