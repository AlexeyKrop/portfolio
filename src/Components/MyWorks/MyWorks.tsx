import React from 'react';
import s from './MyWorks.module.css'
import Work from '../MyWorks/Work/Work';

const MyWorks = () => {
  return (
      <div className={s.wrapper} >
        <div className={s.content} id={'projects'}>
          <div className={s.about}  >
            <div className={s.blockTitle} >
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