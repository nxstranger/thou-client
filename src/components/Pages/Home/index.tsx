import React, {useEffect} from 'react';
import LoginForm from "../../Index/LoginForm";
import {setToken} from "../../../store/chatSlice";
import { useAppDispatch } from '../../../hooks/storeHooks';

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
            {"Home page"}
            <LoginForm/>
        </div>
    );
};

export default Home;


