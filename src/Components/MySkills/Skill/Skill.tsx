import React from 'react';
import s from './Skill.module.css'
type SkillPropsType = {
  title?: string
  icon?: any
  description?: string
}
const Skill = (props: SkillPropsType) => {
  console.log(props)
  return (
    <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1200" className={s.wrapper}>
     <div className={s.blockTitle}>
       <p className={s.title}>{props.title}</p>
       {props.icon}
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