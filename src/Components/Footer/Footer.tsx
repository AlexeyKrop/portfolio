import React from 'react';
import s from './Footer.module.css'
const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <p className="title">Алексей Кропотин</p>
        <ul className={s.list}>
          <li className={s.item}></li>
          <li className={`${s.item} ${s.active}`}></li>
          <li className={s.item}></li>
          <li className={`${s.item} ${s.active}`}></li>
          <li className={s.item}></li>
          <li className={`${s.item} ${s.active}`}></li>
          <li className={s.item}></li>
        </ul>
        <p className="description">Все права зачищены</p>
      </div>
    </div>
  );
};

export default Footer;