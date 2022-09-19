import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { useAppDispatch } from '../../hooks/storeHooks';
import axios from '../../modules/Axios';
import {setToken, setUser} from '../../store/chatSlice';
import {PagesEnum} from "../../enums/pagesEnum";

interface errorFields {
    username: string;
    password: string
}

const initialInputValues = {
    username: 'qwe4',
    password: 'qweqweqwe'
};

const LoginForm = () => {
    const validate = (values: errorFields) => {
        const errors:any = {};
        if (!values.username) errors.username = 'Required!';
        if (!values.password) errors.password = 'Required!';
    };
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmitHandler = async (values:any) => {
        console.log(values);
        const { username } = values;
        const resp = await axios.post(
            '/auth/login',
            JSON.stringify(values),
            { timeout: 2000, },
        );
        if ((resp.status) != 200) return alert('Invalid credentials');

        const { access } = resp.data;
        console.log(access);
        dispatch(setToken(access));
        dispatch(setUser(username));
        if (access) navigate(PagesEnum.ContactPage);
    }
    useEffect(() => {console.log('LoginForm rerendered')}, [])
    return <Formik
        initialValues={initialInputValues}
        validate={validate}
        onSubmit={onSubmitHandler}
    >
        {formik => (
            <form onSubmit={formik.handleSubmit}>
                <input
                    id='username'
                    type="text"
                    {...formik.getFieldProps('username')}
                />
                {formik.errors.username && formik.touched.username && formik.errors.username}
                <input
                    type="password"
                    id="password"
                    {...formik.getFieldProps('password')}
                />
                {formik.errors.password && formik.touched.password && formik.errors.password}
                <button type="submit" disabled={formik.isSubmitting}>
                    Submit
                </button>
            </form>
        )}
    </Formik>
}
export default LoginForm;
