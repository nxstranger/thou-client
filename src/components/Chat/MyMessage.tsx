import React from "react";
import {MyMessageDiv} from "../../style/StyledChatComponents";
import {MessageInterface} from "../../interfaces/chatInterfaces";

const MyMessage = (props:MessageInterface) => {
    const {stamp, message} = props;
    return (
        <MyMessageDiv>
            {message}
            {new Date(stamp).toLocaleTimeString('ru-RU')}
        </MyMessageDiv>
    )
}

export default MyMessage;
