import React from "react";
import {CpMessageDiv} from "../styled/StyledChatComponents";
import {useEffect} from "react";
import {MessageInterface} from "../interfaces/chatInterfaces";


const CpMessage = (props: MessageInterface) => {
    const { stamp, message, type } = props;
    useEffect(() => {
        console.log(stamp, message, type);
    }, [])
    return (
        <CpMessageDiv>
            {message}
        </CpMessageDiv>
    )
}

export default CpMessage;
