import React from 'react';
import s from "./Work.module.css";

const Work = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.block__title}>
        <button className={s.btn}>СМОТРЕТЬ</button>
      </div>
      <div className={s.description}>
        <p>Название проекта</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci architecto at atque dolorum ducimus eaque enim expedita itaque nam perferendis ratione recusandae, reiciendis similique voluptas. Animi consectetur illo optio.</p>
      </div>
    </div>
  );
};

export default Work;