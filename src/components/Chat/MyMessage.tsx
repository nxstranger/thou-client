import React from "react";
import {MyMessageDiv} from "../../style/StyledChatComponents";
import {MessageInterface} from "../../interfaces/chatInterfaces";
import {ChatTimeStampStyle} from '../../style/StyledChatComponents';

const MyMessage = (props:MessageInterface) => {
    const {stamp, message} = props;
    return (
        <MyMessageDiv>
            <div>
                <b>{"You: "}</b>
                {message}
            </div>
            <ChatTimeStampStyle>{new Date(stamp).toLocaleTimeString('ru-RU')}</ChatTimeStampStyle>
        </MyMessageDiv>
    )
}

export default MyMessage;
