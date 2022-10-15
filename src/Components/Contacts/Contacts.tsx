import React from 'react';
import s from './Contacts.module.css'
import {Button} from "../Button/Button";
import axios from "axios";
import * as Yup from 'yup';
import {Field, Form, Formik} from 'formik';

type Values = {
  name: string;
  email: string;
  textarea: string;
}
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
              axios.post(`http://localhost:3010/sendMessage`, {
                values
              }).then(() => console.log('успешно'))
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
                <Button type={'submit'} name={'Send'}/>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contacts;