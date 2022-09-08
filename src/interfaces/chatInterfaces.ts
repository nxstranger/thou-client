

type SendMessageType = 'MSG' | 'INFO'

interface MessageInterface {
    type: 'MY'|'CP';
    message: string;
    stamp: number;
}

interface ChatStoreInterface {
    userId: number | null;
    contactId: number | null;
    messages: MessageInterface[];
    token: string | null;
}

export type {
    MessageInterface,
    ChatStoreInterface,
    SendMessageType,
}
