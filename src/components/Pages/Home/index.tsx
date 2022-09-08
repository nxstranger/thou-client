import React from 'react';
import {useEffect} from 'react';
import LoginForm from "../../LoginForm/LoginForm";
import {setToken} from "../../../store/chatSlice";
import { useAppDispatch } from '../../../store/hooks';

const Home = () => {
    const dispatch = useAppDispatch();
    const cleanToken = () => {
        dispatch(setToken(''));
    };

    useEffect(() => {
        console.log('init Home');
        cleanToken();
    }, []);
    return (
        <div>
            {"Home"}
            <LoginForm/>
        </div>
    );
};

export default Home;


