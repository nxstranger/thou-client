import React, {useEffect} from "react";
import { ChatBodyDiv } from "../styled/StyledChatComponents";
import ChatBox from "./ChatBox";
import MessageForm from './MsgForm';

const Body = () => {
    useEffect(() => {
        console.log('Body init')
    }, [])

    return (
        <ChatBodyDiv>
            <ChatBox />
            <MessageForm />
        </ChatBodyDiv>
    )
}

export default Body;
