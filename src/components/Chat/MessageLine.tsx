import React from "react";
import {
    InfoMessageP,
    MessageLineDiv
} from "../../style/StyledChatComponents";
import {MessageInterface} from "../../interfaces/chatInterfaces";
import MyMessage from './MyMessage';
import PartnerMessage from './PartnerMessage';

const Message = (props: MessageInterface) => {
    const { type, message, stamp } = props;
    return (
        <MessageLineDiv key={stamp}>
            {(
                () => {
                switch(type) {
                    case 'MY':
                        return <MyMessage {...props} key={stamp} />
                    case 'PT':
                        return <PartnerMessage {...props} key={stamp}/>
                    case 'INFO':
                        return <InfoMessageP>{message}</InfoMessageP>
                    default:
                        return <i>{message}</i>;
                }}
            )()}
        </MessageLineDiv>
    )
}

export default Message;
