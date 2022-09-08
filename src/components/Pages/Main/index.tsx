import React, { useState } from 'react';
import { useEffect } from 'react';
import Body from "../../Body";
import ProtectedRoute from "../../ProtectedRoute/index";

const Main : React.FC = () => {
    // const state = useState();

    useEffect(() => {
        console.log('Main init');
    }, []);
    return (
        <ProtectedRoute>
            <Body />
        </ProtectedRoute>
    );
};

export default Main;


