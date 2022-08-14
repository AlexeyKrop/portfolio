import React from 'react';
import Tilt from "react-parallax-tilt";
import s from './Effect.module.css'
export const Effect = () => {
  return (
    <div>
      <Tilt
        className={s.parallaxEffectImg}
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        perspective={900}
        scale={1.1}
        transitionSpeed={1500}
        gyroscope={true}
      >
        <img src="https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg" className={s.innerElement} alt="pic" />
      </Tilt>
    </div>
  );
};

