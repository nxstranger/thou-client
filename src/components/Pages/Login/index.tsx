import React from 'react';
import {useEffect} from 'react';
import {useAppDispatch} from "../../../store/hooks";
import {setToken} from "../../../store/chatSlice";

const Login = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('Login init')
        dispatch(setToken(""));
    },[]);
    return (
        <div>{"Login"}</div>
    );
};

export default Login;


