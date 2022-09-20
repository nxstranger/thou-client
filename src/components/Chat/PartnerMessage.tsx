import React from "react";
import {MessageInterface} from "../../interfaces/chatInterfaces";
import {PartnerMessageDiv, ChatTimeStampStyle} from '../../style/StyledChatComponents';

const PartnerMessage = (props: MessageInterface) => {
    const { message, stamp} = props;
    return (
        <PartnerMessageDiv>
            <div>
                <b>{"Contact: "}</b>
                {message}
            </div>
            <ChatTimeStampStyle>{new Date(stamp).toLocaleTimeString('ru-RU')}</ChatTimeStampStyle>
        </PartnerMessageDiv>
    )
}

export default PartnerMessage;
