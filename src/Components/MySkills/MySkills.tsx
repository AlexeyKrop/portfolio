import React from 'react';
import Skill from "./Skill/Skill";
import s from './MySkill.module.css'

const MySkills = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
      <div className={s.about}>
        <div className={s.blockTitle}>
          <p className={s.title}>Мои скиллы</p>
        </div>
        <div className={s.block}>
          <Skill title={'React'} description={'dsfdsfsdfdsf'}/>
          <Skill title={'Redux'} description={'lorem*dfjkfdslkjghdflksjfvfdsg fldks jhgdflskhjgfdsjfgdhs  lkjdhsglkfjdhsg lkdjshgldfksh ldfksh jsdflhjdfsglkjhdlkjdgfsh lg'}/>
          <Skill title={'TS'} description={''}/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MySkills;