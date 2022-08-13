import React from 'react';
import s from './HireForWork.module.css'
import {Rotate, Slide} from "react-awesome-reveal";

const HireForWork = () => {
  return (
    <Slide triggerOnce duration={1500}>
    <div className={s.wrapper}>
      <div className={s.content}>
      <div className={s.block}>
        <div className={s.block__title}>
          <p>Рассматриваю варианты удаленной работы</p>
        </div>
        <div className={s.description}>
          <button className={s.btn}>Нанять меня</button>
        </div>
      </div>
    </div>
    </div>
    </Slide>
  );
};

export default HireForWork;