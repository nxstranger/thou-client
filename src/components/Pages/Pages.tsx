import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { PagesEnum } from "../../enums/pagesEnum";
import {setIsInitializing} from '../../store/mainSlice'
import Loader from "../Loader/index";
import Home from './Home';
import ChatPage from './ChatPage';
import ContactPage from "./ContactPage";
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks";


const Pages: React.FC = () => {
    const dispatch = useAppDispatch();
    const isInitializing = useAppSelector(({ main }) => main.isInitializing);
    useEffect(() => {
        dispatch(setIsInitializing(false));
    }, []);
    return (
    <>
        {isInitializing ? (
            <Loader />
        ) : (
            <Routes>
                <Route path={PagesEnum.IndexPage} element={<Home />} />
                <Route path={PagesEnum.ChatPage} element={<ChatPage />} />
                <Route path={PagesEnum.ContactPage} element={<ContactPage />} />
                {/*<Route path={PagesEnum.Countdown} element={<Countdown />} />*/}
            </Routes>
        )}
    </>);
}
export  default Pages;
