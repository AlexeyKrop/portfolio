import React, {useEffect} from 'react';
import s from './Profile.module.css'
import AOS from "aos";
import 'aos/dist/aos.css'
const Profile = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={s.wrapper} >
      <div className={s.content}>
      <div data-aos="fade-right" data-aos-delay="800" data-aos-duration="1200" >
        <h3>Привет! Меня зовут <span className={s.name}>Алексей Кропотин</span></h3>
        <p className={`${s.line1} ${s.animTypewriter}`}>Я front-end разработчик. </p>
      </div>
      <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="1200" className={s.photo}>
        <img src="https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg" alt="profile_image"/>
      </div>
    </div>
    </div>
  );
};

export default Profile;