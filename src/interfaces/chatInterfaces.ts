type SendMessageType = 'MSG' | 'INFO'

interface MessageInterface {
    type: 'MY'|'PT'| 'INFO'| 'ERR';
    message: string;
    stamp: number;
    extra?: any,
}

interface ServerMessageInterface {
    code: number,
    message: string,
    stamp: number,
    extra?: any
}

interface ChatStoreInterface {
    userName: string | null;
    contactName: string | null;
    messages: MessageInterface[];
    token: string | null;
}

export type {
    ServerMessageInterface,
    MessageInterface,
    ChatStoreInterface,
    SendMessageType,
}
