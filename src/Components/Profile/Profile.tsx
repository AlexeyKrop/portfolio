import React, {useEffect} from 'react';
import s from './Profile.module.css'
import AOS from "aos";
import 'aos/dist/aos.css'
import {ParticlesContainer} from "../Particles/Particle";
import ReactTypingEffect from "react-typing-effect";
import {Effect} from "../Effect/Effect";

const Profile = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={s.wrapper} >
      <ParticlesContainer/>
      <div className={s.content} id={'profile'}>
      <div className={s.textBlock} data-aos="fade-right" data-aos-delay="800" data-aos-duration="1200" >
        <p className={s.text}>Hi There!<span className={s.wave} role="img" aria-labelledby="wave">👋🏻</span></p>
        <h3> I am <span className={s.name}>Alexey Kropotin</span></h3>
        <ReactTypingEffect className={s.text} text={'Frontend developer.'}/>
        {/*<p className={`${s.line1} ${s.animTypewriter}`}>Я front-end разработчик. </p>*/}
      </div>
      <div className={s.photo}>
        <Effect />
      </div>
    </div>
    </div>
  );
};

export default Profile;