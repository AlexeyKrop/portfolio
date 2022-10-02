import React from 'react';
import Tilt from "react-parallax-tilt";
import s from './Effect.module.css'
import profileImage from '../../Assets/profile.jpg'
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
        <img src={profileImage} className={s.innerElement} alt="pic" />
      </Tilt>
    </div>
  );
};

