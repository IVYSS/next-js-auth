import React from "react";
import { Form, Formik, Field, ErrorMessage } from 'formik';
// import { Button } from '@components/Buttons';

import * as Yup from 'yup'

export default function Auth(props: any) {

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .required("email is required")
            .email("email is required"),
        password: Yup.string().required("Password is required").min(5, "Password should be 5 word.")
    })


    const initialValues = { email: '', password: '' }

    return (
        <>
            <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={(values) => {
                setTimeout(() => {
                    alert(values.email + values.password);
                }, 1000);
            }}>
                {({ isSubmitting }) => (
                    <Form >
                        <Field type="email" name="email" placeholder="Email"></Field>
                        <ErrorMessage name="email"></ErrorMessage>

                        <Field type="password" name="password" placeholder="Password"></Field>
                        <ErrorMessage name="password"></ErrorMessage>

                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </>)
}