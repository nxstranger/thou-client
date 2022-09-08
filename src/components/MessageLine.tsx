import React from "react";
import {MyMessageDiv, CpMessageDiv, MessageLineDiv} from "../styled/StyledChatComponents";
import {useEffect} from "react";
import {MessageInterface} from "../interfaces/chatInterfaces";


const Message = (props: MessageInterface) => {
    const { stamp, message, type } = props;
    useEffect(() => {
        // console.log(stamp, message, type)
    }, [])
    return (
        <MessageLineDiv>
            {
            (type === 'MY')
                ? <MyMessageDiv>
                    {message}{'\n'}{new Date(stamp).toLocaleTimeString('ru-RU')}
                </MyMessageDiv>
                : <CpMessageDiv>
                    {message}{'\n'}{new Date(stamp).toLocaleTimeString('ru-RU')}
                </CpMessageDiv>
            }

        </MessageLineDiv>
    )
}

export default Message;
