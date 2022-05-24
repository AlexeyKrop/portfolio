import React from 'react';
import Skill from "./Skill/Skill";
import s from './MySkill.module.css'

const MySkills = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.about}>
        <div className={s.title}>
          <p>Мои скиллы</p>
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

export default MySkills;