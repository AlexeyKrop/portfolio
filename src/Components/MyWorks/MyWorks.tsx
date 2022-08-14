import React from 'react';
import s from './MyWorks.module.css'
import Work from '../MyWorks/Work/Work';

const MyWorks = () => {
  return (
      <div className={s.wrapper} id={'projects'}>
        <div className={s.content}>
          <div className={s.about}>
            <div className={s.blockTitle}>
              <p className={s.title}>My Works</p>
            </div>
            <div className={s.block}>
              <Work/>
              <Work/>
              <Work/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MyWorks;