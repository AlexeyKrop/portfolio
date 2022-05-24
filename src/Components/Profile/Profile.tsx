import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.about_me}>
        <p>Привет! Меня зовут Алексей Кропотин.
          Я front-end разработчик</p>
      </div>
      <div className={s.photo}>
        <img src="https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg" alt="profile_image"/>
      </div>
    </div>
  );
};

export default Profile;