import React, {SyntheticEvent} from "react";
import {useAppDispatch} from "../../hooks/storeHooks";
import {unAuthorizeUser} from "../../store/chatSlice";

const Logout = () => {
    const dispatch = useAppDispatch();
    const logoutAction = ({currentTarget}: SyntheticEvent<HTMLButtonElement>) => {
        currentTarget.disabled = true;
        dispatch(unAuthorizeUser());
        console.log('LogOut');
    }
    return (
        <button type='button' onClick={logoutAction}>
            LogOut
        </button>
    )
}

export default Logout;
