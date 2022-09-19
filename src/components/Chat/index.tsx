import React, {useEffect, useMemo} from 'react';
import { ChatBodyDiv, InputFormWrapper } from '../../style/StyledChatComponents';
import ChatBox from './ChatBox';
import MessageForm from './MsgForm';
import Logout from './Logout';
import {useAppSelector} from '../../hooks/storeHooks';

const ChatBody = () => {
    const token = useAppSelector(({chat}) => chat.token);
    useEffect(() => {
        console.log('Index init');
    }, [])

    const showLogoutButton = useMemo(() => !!token, [token])

    return (
        <ChatBodyDiv>
            <ChatBox />
            <InputFormWrapper>
                <MessageForm />
                {(showLogoutButton) ? <Logout /> : ""}
            </InputFormWrapper>
        </ChatBodyDiv>
    )
}

export default ChatBody;
