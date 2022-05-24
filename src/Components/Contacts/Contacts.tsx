import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <p>Контакты</p>
        <form id="form" className={s.form_wrapper}>
          <input id="name" type="text" placeholder="NAME"/>
          <input id="email" type="text" placeholder="E-MAIL"/>
          <textarea id="message" placeholder="MESSAGE"/>
        </form>
        <button className={s.btn} id="submit" type="submit">Отправить</button>
      </div>

    </div>
  );
};

export default Contacts;