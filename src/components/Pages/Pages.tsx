import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { PagesEnum } from "./pagesDescription";
import {setIsInitializing} from '../../store/mainSlice'
import Loader from "../Loader/index";
import Home from './Home';
import Main from './Main';
import {useAppDispatch, useAppSelector} from "../../store/hooks";


const Pages: React.FC = () => {
    const dispatch = useAppDispatch();
    const isInitializing = useAppSelector(({ main }) => main.isInitializing);
    useEffect(() => {
        console.log('init Pages');
        console.log(new Date());
        dispatch(setIsInitializing(false));
        // setTimeout(() => {
        //     dispatch(mainActions.setIsInitializing(false));
        // }, 1000);
        console.log('isInitializing', isInitializing);
    }, []);
    return (
    <>
        {isInitializing ? (
            <Loader />
        ) : (
            <Routes>
                <Route path={PagesEnum.index} element={<Home />} />
                <Route path={PagesEnum.main} element={<Main />} />
            </Routes>
        )}
    </>);
}
export  default Pages;
