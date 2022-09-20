import React, {useEffect} from "react";
import * as Yup from 'yup';
import {Formik} from "formik";
import useChat from '../../hooks/useChat';
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks";
import {StyledMessageInput, StyledSubmitButton} from '../../style/StyledChatComponents';
import {addMessage} from "../../store/chatSlice";

const MsgForm = () => {
    const {userName, contactName} = useAppSelector(({ chat }) => chat);
    const { sendMessage } = useChat();
    const dispatch = useAppDispatch();
    useEffect( () => {
        console.log('MsgForm init');
    }, []);
    return (
        <Formik
            initialValues={{message: `qwe_${userName}`}}
            validationSchema={Yup.object({
                message: Yup.string()
                    .min(1, 'Must include characters')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting, setValues }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    try {
                        sendMessage(values.message);
                    } catch (error) {
                        let message = 'Unknown Error';
                        if (error instanceof Error) message = error.message;
                        dispatch(addMessage({type: "ERR", message: message, stamp: +new Date()}));
                    }
                    setSubmitting(false);
                    setValues({ message: `qwe_${userName}`})
                }, 500);

            }}
        >
        {formik => (
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="message">Message</label>
                    <StyledMessageInput
                        id="message"
                        type="text"
                        {...formik.getFieldProps('message')}
                    />
                    <StyledSubmitButton type="submit" disabled={formik.isSubmitting}>Send</StyledSubmitButton>
                </div>
                <div>
                    {'userName:'}{userName}
                    {'contactName:'}{contactName}
                </div>
            </form>
        )}
        </Formik>
    )
}

export default MsgForm;
