import React from 'react';
import s from './Skill.module.css'
const Skill = () => {
  return (
    <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1200" className={s.wrapper}>
     <div className={s.blockTitle}>
       <p className={s.title}>REACT</p>
     </div>
      <div className={s.description}>
       <p>Подробное описание навыка</p>
     </div>
    </div>
  );
};

export default Skill;