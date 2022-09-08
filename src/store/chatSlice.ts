import { createSlice } from '@reduxjs/toolkit';
import {ChatStoreInterface, MessageInterface} from "../interfaces/chatInterfaces";

const fakeText = "fefewfewf efewfewflwnjoifewhnfiew nnuhfiunewfhiewfn nfewn nfewnhiwefnifiunwfinwewneiu";

const fakeMessages:MessageInterface[] = [
    {type: 'MY', message: fakeText, stamp: (+new Date() - 100000)},
    {type: 'CP', message: fakeText, stamp: (+new Date() - 10000)},
    {type: 'MY', message: fakeText, stamp: (+new Date() - 1000)},
    {type: 'MY', message: fakeText, stamp: (+new Date() - 100)},
    {type: 'CP', message: fakeText, stamp: (+new Date() - 10)},
    {type: 'MY', message: fakeText, stamp: (+new Date() - 1)},
]


const loadChatStore = () => {
    let localData = localStorage.getItem('chatStore');
    let initialStore: ChatStoreInterface;
    if (localData) {
        const initial = JSON.parse(localData);

        initialStore = {
            ...initial,
            token: "qweqwe",
            messages: fakeMessages,
        };
    } else {
        const storeData = { userId: 8, contactId: 4 }
        localStorage.setItem('chatStore', JSON.stringify(storeData))
        initialStore = {
            userId: 8,
            token: "qweqwe",
            contactId: 4,
            messages: fakeMessages,
        }
    }
    return initialStore;
}


const chatSlice = createSlice({
    name: 'chat',
    initialState: loadChatStore(),
    reducers: {
        addMessage: (state, action) => {
            state.messages.push({
                type: action.payload.type,
                stamp: action.payload.stamp,
                message: action.payload.message,
            })
        },
        setToken:  (state, action) => {
            state.token = action.payload;
        }
    }
})

export const { addMessage, setToken } = chatSlice.actions
export default chatSlice.reducer
