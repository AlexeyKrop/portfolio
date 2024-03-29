import React from 'react';
import s from './HireForWork.module.css'
import {Button} from "../Button/Button";
import {AiFillPhone} from "@react-icons/all-files/ai/AiFillPhone";

const HireForWork = () => {
  return (
    <div className={s.wrapper} >
      <div className={s.content} data-aos="fade-right" data-aos-delay="400" data-aos-duration="1200">
      <div className={s.block}>
        <div className={s.block__title}>
          <p>Considering remote work options</p>
        </div>
        <div className={s.description}>
          <Button icon={<AiFillPhone className={s.iconPhone}/>} href={"tel:+79110877942"} name={'Hire me'} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HireForWork;