import React, {useEffect} from "react";
import {useAppSelector} from "../../../hooks/storeHooks";
import ChangeContactForm from "./ChangeContactForm";
import ProtectedRoute from "../../ProtectedRoute";
import {useNavigate} from "react-router-dom";
import {PagesEnum} from "../../../enums/pagesEnum";

const ContactPage = () => {
    const contactName = useAppSelector(({chat}) => chat.contactName);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('init ContactSetupWrapper');
        if (contactName) {
            console.log('contactName:', contactName);
            navigate(PagesEnum.ChatPage);
        }
    }, [contactName])

    return (
        <ProtectedRoute>
            <ChangeContactForm />
        </ProtectedRoute>
    )
}

export default ContactPage;
