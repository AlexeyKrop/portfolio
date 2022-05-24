import React from 'react';
import s from './Skill.module.css'
const Skill = () => {
  return (
    <div className={s.wrapper}>
     <div className={s.block__title}>
       <p>REACT</p>
     </div>
      <div className={s.description}>
       <p>Подробное описание навыка</p>
     </div>
    </div>
  );
};

export default Skill;