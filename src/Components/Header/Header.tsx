import React from 'react';
import s from './Header.module.css'
export const Header = () => {
  return(
    <div className={s.wrapper}>
      <div>Header</div>
      <ul className={s.list}>
        <li className={s.item}><a href="/" className={s.link}>Главная</a></li>
        <li className={s.item}><a href="/" className={s.link}>Скиллы</a></li>
        <li className={s.item}><a href="/" className={s.link}>Работа</a></li>
        <li className={s.item}><a href="/" className={s.link}>Контакты</a></li>
      </ul>
    </div>
  )
}