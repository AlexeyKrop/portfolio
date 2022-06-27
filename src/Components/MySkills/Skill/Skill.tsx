import React from 'react';
import s from './Skill.module.css'
type SkillPropsType = {
  title: string
  description: string
}
const Skill = (props: SkillPropsType) => {
  return (
    <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1200" className={s.wrapper}>
     <div className={s.blockTitle}>
       <p className={s.title}>{props.title}</p>
     </div>
      <div className={s.descriptionBlock} data-aos="zoom-in" data-aos-delay="500"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out">
       <p className={s.descriptionTitle}>{props.description}</p>
     </div>
    </div>
  );
};

export default Skill;