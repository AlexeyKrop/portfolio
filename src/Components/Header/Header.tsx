import React from 'react';
import s from './Header.module.css'
export const Header = () => {
  return(
    <div className={s.wrapper}>
      <nav className={s.content}>
        <div/>
        {/*<div><p className={s.logo}>Alexey Kropotin</p></div>*/}
      <ul className={s.list}>
        <li className={s.item}><a href="/" className={s.link}>Profile</a></li>
        <li className={s.item}><a href="/" className={s.link}>Skills</a></li>
        <li className={s.item}><a href="/" className={s.link}>Projects</a></li>
        <li className={s.item}><a href="/" className={s.link}>Contacts</a></li>
      </ul>
      </nav>
    </div>
  )
}