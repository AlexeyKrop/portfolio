import React from 'react';
import s from './MyWorks.module.css'
import Work from '../MyWorks/Work/Work';
import socialNetworkBg from '../../Asset/social_network.png';
import todolist from '../../Asset/todolist.png'
import {GitHubView} from "../GitHubView/GitHubView";

const descriptionWork = {
  socialNetwork: {
    description: 'The project is made on React on class components,written in TypeScript, used Redux, Redux-Thunk as state management, React-Router-Dom, CSS native',
    source: 'https://github.com/AlexeyKrop/social-network',
    deployment: 'https://github.com/AlexeyKrop/social-network',
    bg: socialNetworkBg
  },
  todolist: {
    description:'The project was made on React on functional components, written in TypeScript,  Redux, Redux-thunk was used as state management, UI was developed using the MUI library, React-Router-Dom',
    source: 'https://github.com/AlexeyKrop/react-todo',
    deployment: 'https://react-todolist-by.herokuapp.com/login',
    bg: todolist
  }
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
            <Work title={'Social-network'} source={descriptionWork.socialNetwork.source}
                  description={descriptionWork.socialNetwork.description} bg={descriptionWork.socialNetwork.bg}/>
            <Work title={'Todolist'} source={descriptionWork.todolist.source} deployment={descriptionWork.todolist.deployment}
                  description={descriptionWork.todolist.description} bg={descriptionWork.todolist.bg}/>
            <Work title={'Card'} source={descriptionWork.socialNetwork.source}
                  description={descriptionWork.socialNetwork.description}/>
          </div>
        </div>
        <div className={s.githubView}>
          <p className={s.title}>Days I Code</p>
          <GitHubView/>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;