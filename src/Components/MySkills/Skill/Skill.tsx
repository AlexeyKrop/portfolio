import React from 'react';
import s from './Skill.module.css'
import Tilt from "react-parallax-tilt";
type SkillPropsType = {
  title?: string
  icon?: any
  description?: string
}
const Skill = (props: SkillPropsType) => {
  return (
      <Tilt>
        <div className={s.wrapper}>
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
      </Tilt>

  );
};

export default Skill;