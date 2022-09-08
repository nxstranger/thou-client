import React, {useEffect} from "react";
import * as Yup from 'yup';
import { Formik } from "formik";
import useChat from '../hooks/useChat';
import {useAppSelector} from "../store/hooks";

const MsgForm = () => {

    const {userId, contactId} = useAppSelector(({ chat }) => chat);
    const { sendMessage } = useChat();
    useEffect( () => {
        console.log('MsgForm init');
    }, []);
    // console.log(userId);
    return (
        <Formik
            initialValues={{message: "qwe"}}
            validationSchema={Yup.object({
                message: Yup.string()
                    .min(1, 'Must include characters')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting, setValues }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    sendMessage(values.message);
                    setSubmitting(false);
                    setValues({ message: ""})
                }, 400);

            }}
        >
        {formik => (
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="message">Message</label>
                <input
                    id="message"
                    type="text"
                    {...formik.getFieldProps('message')}
                />
                    <button type="submit">Send</button>
                </div>
                <div>
                    {'userId:'}{userId}
                    {'contactId:'}{contactId}
                </div>
            </form>
        )}
        </Formik>
    )
}

export default MsgForm;
