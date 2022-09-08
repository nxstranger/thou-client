import React, { PropsWithChildren } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { PagesEnum } from "../Pages/pagesDescription";
import { useAppSelector } from "../../store/hooks";


const ProtectedRoute: React.FC<PropsWithChildren>= ({ children }) => {
    const isAuthorized = useAppSelector(({ chat }) => chat.token);
    const location = useLocation();

    return (
        <>
            {!isAuthorized ? (
                <Navigate to={PagesEnum.index} state={{ from: location }} replace />
            ) : (
                children
            )}
        </>
    );
};

export default ProtectedRoute;
