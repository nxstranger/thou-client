import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {ChatStoreInterface, MessageInterface} from "../interfaces/chatInterfaces";
import {AddMessageActionInterface, LocalStorageChatInterface} from "../interfaces/chatSliceInterfaces";
import {userApi} from '../modules/Axios';

const fakeText = "fefewfewf efewfewflwnjoifewhnfiew nnuhfiunewfhiewfn nfewn nfewnhiwefnifiunwfinwewneiu";

const fakeMessages:MessageInterface[] = [
    {type: 'MY', message: fakeText, stamp: (+new Date() - 100000)},
    {type: 'PT', message: fakeText, stamp: (+new Date() - 10)},
    {type: 'MY', message: fakeText, stamp: (+new Date() - 1)},
]

interface setContactNameInterface {
    token: string,
    contactName: string,
}

export const asyncSetContactName = createAsyncThunk(
    'user/setContactName',
    async ({token, contactName} : setContactNameInterface) => {
        try {
            const response = await userApi(token).put('chat_users/update_contact/', {contact_name: contactName})
            return (response.status == 200) ? contactName : undefined;
        } catch (err) {
            console.log('asyncSetContactName', err);
        }
    },
)

const updateLocalStorageData = ({ contactName, userName} : LocalStorageChatInterface) => {
    const chatStore = localStorage.getItem('chatStore');
    if (!chatStore) return;
    const localData = JSON.parse(chatStore);
    let newChatStoreData = {
        contactName:         (contactName || localData.contactName),
        userName: (userName || localData.userName),
    };
    localStorage.setItem('chatStore', JSON.stringify(newChatStoreData));
}

const loadChatStore = () => {
    let localData = localStorage.getItem('chatStore');
    let initialStore: ChatStoreInterface;
    if (localData) {
        const initial = JSON.parse(localData);

        initialStore = {
            ...initial,
            token: "",
            messages: fakeMessages,
        };
    } else {
        const storeData = { userName: "", contactName: "" }
        localStorage.setItem('chatStore', JSON.stringify(storeData))
        initialStore = {
            userName: "qwe4",
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYzMDU0MDQzLCJpYXQiOjE2NjMwNTM3NDMsImp0aSI6Ijc3MTQwOWVmN2ViZjQ5OWQ4YTBmY2EyNDE0MDU2ZTkxIiwidXNlcl9pZCI6MX0.XyQj_HsXM_uk35jOhBYiYBIOGFuCjPFqjhrsQ9_5T6s",
            contactName: "qwe8",
            messages: fakeMessages,
        }
    }
    return initialStore;
}


const chatSlice = createSlice({
    name: 'chat',
    initialState: loadChatStore(),
    reducers: {
        addMessage: (state, action:AddMessageActionInterface) => {
            const {type, message, stamp, extra} = action.payload;
            state.messages.push({type, stamp, message, extra})
        },
        setToken:  (state, action) => {
            state.token = action.payload;
            // updateLocalStorageData({contactName: 8});
        },
        unAuthorizeUser: (state) => {
            state.token = '';
            state.messages = state.messages.filter((msg) => msg.type !== 'INFO');
            state.contactName = '';
            state.userName = "";
        },
        setUser: (state, { payload }) => {
            state.userName = payload;
        },
        setContactName: (state, action) => {
            const contactName = action.payload;
            state.contactName = contactName;
            const changeContactMsg:MessageInterface = {
                type: "INFO",
                stamp: +new Date().getTime(),
                message: `You are change contact to ${contactName}... reconnect`,
            }
            state.messages.push(changeContactMsg);
            updateLocalStorageData({ contactName });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(asyncSetContactName.fulfilled, (
            state,
            action,
            ) => (action.payload ? { ...state, contactName: action.payload } : state));
        },
})

export const { addMessage, setToken, setContactName, setUser, unAuthorizeUser } = chatSlice.actions
export default chatSlice.reducer
