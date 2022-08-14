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
            <Link key={index}
                  className={s.link}
                  activeClass={s.active}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
            >
              {item.text}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}