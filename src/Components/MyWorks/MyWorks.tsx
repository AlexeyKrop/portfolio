import React from 'react';
import s from './MyWorks.module.css'
import Work from '../MyWorks/Work/Work';

const descriptionWork = {
  socialNetwork: 'The project is made on React on class components,written in TypeScript, used Redux, Redux-Thunk as state management, React-Router-Dom, CSS native',
  todolist: 'The project was made on React on functional components, written in TypeScript,  Redux, Redux-thunk was used as state management, UI was developed using the MUI library, React-Router-Dom'
}

const MyWorks = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content} id={'projects'}>
        <div className={s.about}>
          <div className={s.blockTitle}>
            <p className={s.title}>My Works</p>
          </div>
          <div className={s.block}>
            <Work title={'Social-network'} href={'https://github.com/AlexeyKrop/social-network'}
                  description={descriptionWork.socialNetwork}/>
            <Work title={'Todolist'} href={'https://github.com/AlexeyKrop/react-todo'} description={descriptionWork.todolist}/>
            <Work/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;