import React, {useState} from 'react';
import s from "./Work.module.css";
import {Button} from "../../Button/Button";
import Tilt from "react-parallax-tilt";

const Work = () => {
  const [scale, setScale] = useState(1.15);
  return (
    <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
    <div className={s.wrapper}  data-aos="fade-right" data-aos-delay="400" data-aos-duration="1200">
      <div className={s.block__title} >
        <Button name={'View Source'}/>
      </div>
      <div className={s.descriptionTitle}>
        <p className={s.title}>Todolist</p>
        <p>Проект выполнен на React, подключены библиотеки Redux,</p>
      </div>
    </div>
      </Tilt>
  );
};

export default Work;