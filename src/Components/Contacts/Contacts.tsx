import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
      <div className={s.block} data-aos="fade-right" data-aos-delay="400" data-aos-duration="1200">
        <p className={s.title}>Контакты</p>
        <form id="form" className={s.form_wrapper} >
          <input className={s.form_input} id="name" type="text" placeholder="NAME *"/>
          <input className={s.form_input} id="email" type="text" placeholder="E-MAIL *"/>
          <textarea  className={s.form_input} id="message" placeholder="MESSAGE *"/>
        </form>
        <button className={s.btn} id="submit" type="submit">Отправить</button>
      </div>
      </div>
    </div>
  );
};

export default Contacts;