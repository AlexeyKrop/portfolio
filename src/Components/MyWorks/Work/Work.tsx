import React from 'react';
import s from "./Work.module.css";

const Work = () => {
  return (
    <div className={s.wrapper} data-aos="fade-right" data-aos-delay="400" data-aos-duration="1200">
      <div className={s.block__title}>
        <button className={s.btn}>СМОТРЕТЬ</button>
      </div>
      <div className={s.descriptionTitle}>
        <p className={s.title}>Todolist</p>
        <p>Проект выполнен на React, подключены библиотеки Redux,</p>
      </div>
    </div>
  );
};

export default Work;