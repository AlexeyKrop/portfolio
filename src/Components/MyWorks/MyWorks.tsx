import React from 'react';
import s from './MyWorks.module.css'
import Work from '../MyWorks/Work/Work';
import socialNetworkBg from '../../Assets/social_network.png';
import todolist from '../../Assets/todolist.png';
import cards from '../../Assets/card.png'
import {GitHubView} from "../GitHubView/GitHubView";

const descriptionWork = {
  socialNetwork: {
    description: 'The project is made on React on class components,written in TypeScript, used Redux, Redux-Thunk as state management, React-Router-Dom, CSS native',
    source: 'https://github.com/AlexeyKrop/social-network',
    deployment: 'https://github.com/AlexeyKrop/social-network',
    bg: socialNetworkBg
  },
  todolist: {
    description:'The project was made on React on functional components with hooks, written in TypeScript, Redux was used as state management, UI was developed using the MUI library, used Redux-thunk, React-Router-Dom, formik',
    source: 'https://github.com/AlexeyKrop/react-todo',
    deployment: 'https://react-todolist-by.herokuapp.com/login',
    bg: todolist
  },
  cards: {
    description:'The project was made on React on functional components with hooks, written in TypeScript, Redux was used as state management, UI was developed using the MUI library, used Redux-thunk, React-Router-Dom, formik',
    source: 'https://github.com/AlexeyKrop/react-todo',
    deployment: 'https://react-todolist-by.herokuapp.com/login',
    bg: cards
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
            <Work title={'Card'} source={descriptionWork.cards.source}
                  description={descriptionWork.cards.description} bg={descriptionWork.cards.bg}/>
          </div>
        </div>
        <div className={s.githubView} data-aos="fade-right" data-aos-delay="400" data-aos-duration="1200">
          <p className={s.title}>Days I Code</p>
          <GitHubView />
        </div>
      </div>
    </div>
  );
};

export default MyWorks;