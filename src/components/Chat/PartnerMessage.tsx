import React from "react";
import {MessageInterface} from "../../interfaces/chatInterfaces";
import {PartnerMessageDiv} from '../../style/StyledChatComponents';

const PartnerMessage = (props: MessageInterface) => {
    const { message, stamp} = props;
    return (
        <PartnerMessageDiv>
            {message}
            {new Date(stamp).toLocaleTimeString('ru-RU')}
        </PartnerMessageDiv>
    )
}

export default PartnerMessage;
