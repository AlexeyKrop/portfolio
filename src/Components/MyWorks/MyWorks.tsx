import React from 'react';
import s from './MyWorks.module.css'
import Skill from "../MySkills/Skill/Skill";
const MyWorks = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.about}>
        <div className={s.title}>
          <p>Мои работы</p>
        </div>
        <div className={s.block}>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;