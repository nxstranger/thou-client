import React, { useEffect } from "react";
import * as Yup from 'yup';
import {Formik} from "formik";
import {asyncSetContactName} from '../../../store/chatSlice'
import {useAppDispatch, useAppSelector} from "../../../hooks/storeHooks";

const ChangeContactForm = () => {
    const contactName = useAppSelector(({chat}) => chat.contactName);
    const token = useAppSelector(({chat}) => chat.token);
    const dispatch = useAppDispatch();

    useEffect( () => {
        console.log('ChangeContactForm init');
    }, [contactName]);
    return (
        <Formik
            initialValues={{contactName: contactName}}
            validationSchema={Yup.object({
                contactName: Yup.string()
                    .min(1, 'Must include characters')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting, setValues }) => {
                setTimeout(() => {
                    const newName = values.contactName;
                    console.log(JSON.stringify(values, null, 2));
                    if (newName && token) {
                        dispatch(asyncSetContactName({token, contactName: newName}));
                    }
                    setSubmitting(false);
                    setValues({ contactName: newName });
                }, 500);

            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="contactName">Contact ID</label>
                        <input
                            id="contactName"
                            type="text"
                            {...formik.getFieldProps('contactName')}
                        />
                        <button type="submit" disabled={formik.isSubmitting}>Change ID</button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default ChangeContactForm;
