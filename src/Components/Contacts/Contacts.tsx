import React, {useState} from 'react';
import s from './Contacts.module.css'
import {Button} from "../Button/Button";
import axios, {AxiosError} from "axios";
import * as Yup from 'yup';
import {Field, Form, Formik} from 'formik';
import {Preloader} from "../Preloader/Preloader";

type Values = {
  name: string;
  email: string;
  textarea: string;
}

const URL = `http://localhost:3010/sendMessage`

const Contacts = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Enter your name'),
    email: Yup.string().email('Invalid email').required('Enter your email'),
    textarea: Yup.string().min(2, 'Too Short!')
      .max(50, 'Too Long!').required('Write me some message, please'),
  });
  const [loader, setLoader] = useState<boolean>(false)
  const [success, setSuccess] = useState<string>('')
  const [error, setError] = useState<string>('')
  setTimeout(() => {
    setError('')
    setSuccess('')
  }, 2000)
  return (
    <div className={s.wrapper} id={'contacts'}>
      <div className={s.content}>
        <div className={s.block} data-aos="fade-right" data-aos-delay="400"
             data-aos-duration="1200">
          <p className={s.title}>Contacts</p>
          <Formik
            initialValues={{
              name: '',
              email: '',
              textarea: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(
              values: Values,
              {resetForm}
            ) => {
              setLoader(true)
              axios.post(URL, {
                values
              })
                .then(() => setSuccess("The message is request success"))
                .catch((err: AxiosError) => setError(err.message))
                .finally(() => setLoader(false))
              resetForm();
            }
            }
          >
            {({errors, touched}) => (
              <Form id="form" className={s.form_wrapper}>
                <Field className={s.form_input + ' ' + s.form_name} id="name" name="name"
                       placeholder="NAME *"/>
                {touched.name && errors.name &&
                  <div className={s.error_name}>{errors.name}</div>}
                <Field className={s.form_input + ' ' + s.form_email} id="email"
                       name="email"
                       placeholder="E-MAIL *"/>

                {touched.email && errors.email &&
                  <div className={s.error_email}>{errors.email}</div>}
                <Field
                  id="textarea"
                  name="textarea"
                  className={s.form_input + ' ' + s.form_textarea}
                  placeholder="MESSAGE *"
                  type="textarea"
                />
                {errors.textarea &&
                  <div className={s.error_textarea}>{errors.textarea}</div>}
                {error && <div className={s.error}>{error}</div>}
                {success && <div className={s.success}>{success}</div>}
                <Button icon={loader && <Preloader/>} type={'submit'} name={'Send'}/>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contacts;