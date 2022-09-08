import React from 'react';
import { Formik } from 'formik';
import { useAppDispatch } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import axios from '../../modules/axios/config';
import {setToken} from '../../store/chatSlice';

interface errorFields {
    username: string;
    password: string
}

const LoginForm = () => {
    const validate = (values: errorFields) => {
        const errors:any = {};
        if (!values.username) errors.username = 'Required!';
        if (!values.password) errors.password = 'Required!';
    };
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    const onSubmitHandler = async (values:any) => {
        console.log(values);
        const resp = await axios.post(
            '/auth/login/',
            JSON.stringify(values),
            { timeout: 2000, },
        );
        const { access } = resp.data;
        console.log(access);
        dispatch(setToken(access));
        if (!!access) navigate('/main');
    }
    return <Formik
        initialValues={{username: 'admin', password: 'qweqweqwe'}}
        validate={validate}
        onSubmit={onSubmitHandler}
    >
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="login"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    autoComplete="off"
                />
                {errors.username && touched.username && errors.username}
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    autoComplete="off"
                />
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
        )}
    </Formik>
}
export default LoginForm;
