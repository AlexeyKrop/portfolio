import React from 'react';
import s from './Footer.module.css'
import {AiFillMail} from "@react-icons/all-files/ai/AiFillMail";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.block}>
          <p className="title">Alexey Kropotin</p>
          <ul className={s.list}>
            <li className={`${s.item} ${s.active}`}>
              <a href="mailto:kropotin_aleksey@mail.ru" target="_blank" rel="noopener noreferrer"><AiFillMail className={s.iconFooter}/></a>
            </li>
            <li className={`${s.item} ${s.active}`}>
              <a href="https://github.com/AlexeyKrop" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className={s.iconFooter}/>
              </a>
            </li>
            <li className={`${s.item} ${s.active}`}>
              <a href="https://www.linkedin.com/in/alexey-kropotin-250759251/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className={s.iconFooter}/>
              </a>
            </li>
            <li className={`${s.item} ${s.active}`}>
              <a href="https://www.codewars.com/users/AlexeyKrop" target="_blank" rel="noopener noreferrer">
                <SiCodewars className={s.iconFooter}/>
              </a>
            </li>
          </ul>
          <p className={s.description}>Copyright © 2022 AS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;