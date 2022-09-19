import {ServerMessageInterface} from "../../interfaces/chatInterfaces";
import {useAppDispatch} from "../../hooks/storeHooks";
import {setContactName} from "../../store/chatSlice";


const setupUserRequest = (serverMessage: ServerMessageInterface, contactName:  number | null) => {
    const dispatch = useAppDispatch();
    dispatch(setContactName(contactName));
}

const handleMessage = (serverMessage: ServerMessageInterface, contactName: number | null) => {
    const { code } = serverMessage;

    switch (code) {
        case 1003: setupUserRequest(serverMessage, contactName);
    }
}

