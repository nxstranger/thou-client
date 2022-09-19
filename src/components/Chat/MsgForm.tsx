import React, {useEffect} from "react";
import * as Yup from 'yup';
import {Formik} from "formik";
import useChat from '../../hooks/useChat';
import {useAppSelector} from "../../hooks/storeHooks";
import {StyledMessageInput, StyledSubmitButton} from '../../style/StyledChatComponents';

const MsgForm = () => {

    const {userName, contactName} = useAppSelector(({ chat }) => chat);
    const { sendMessage } = useChat();
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
                    sendMessage(values.message);
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
