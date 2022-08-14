import React from 'react';
import s from './Header.module.css'
import {Link, animateScroll as scroll} from "react-scroll";

const listItems = [
  {
    to: "profile",
    text: "Profile"
  },
  {
    to: "skills",
    text: "Skills"
  },
  {
    to: "projects",
    text: "Projects"
  },
  {
    to: "contacts",
    text: "Contacts"
  }
];
export const Header = () => {
  return (
    <div className={s.wrapper}>
      <nav className={s.content}>
        <div/>
        {/*<div><p className={s.logo}>Alexey Kropotin</p></div>*/}
        <ul className={s.list}>
          {listItems.map((item, index) => (
            <li className={s.link} key={index}>
              <Link
                activeClass='active'
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={0}
              >
                {item.text}
              </Link></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}