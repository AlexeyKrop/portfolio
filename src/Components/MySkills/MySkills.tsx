import React from 'react';
import Skill from "./Skill/Skill";
import s from './MySkill.module.css'
const MySkills = () => {
  return (
    <div className={s.wrapper}>
      <p>Мои скиллы</p>
      <div className={s.block}>
        <Skill/>
        <Skill/>
        <Skill/>
      </div>
    </div>
  );
};

export default MySkills;