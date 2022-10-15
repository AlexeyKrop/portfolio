import React, {ChangeEvent, FormEvent, useState} from 'react';
import s from './Contacts.module.css'
import {Button} from "../Button/Button";
import axios from "axios";

const Contacts = () => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const onChangeNameHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.currentTarget.value)
  }
  const onChangeEmailHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.currentTarget.value)
  }
  const onChangeMessageInputHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageInput(e.currentTarget.value)
  }
  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios.post(`http://localhost:3010/sendMessage`, {
      nameInput, emailInput, messageInput
    }).then(() => console.log('успешно'))
  }
  return (
    <div className={s.wrapper} id={'contacts'}>
      <div className={s.content}>
        <div className={s.block} data-aos="fade-right" data-aos-delay="400"
             data-aos-duration="1200">
          <p className={s.title}>Contacts</p>
          <form onSubmit={onSubmitForm} id="form" className={s.form_wrapper}>
            <input onChange={onChangeNameHandle} value={nameInput}  className={s.form_input} id="name" type="text" placeholder="NAME *"/>
            <input onChange={onChangeEmailHandle} value={emailInput}  className={s.form_input} id="email" type="text"
                   placeholder="E-MAIL *"/>
            <textarea onChange={onChangeMessageInputHandle} value={messageInput}  className={s.form_input} id="message" placeholder="MESSAGE *"/>
            <Button name={'Send'}/>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contacts;