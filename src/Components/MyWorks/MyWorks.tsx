import React from 'react';
import s from './MyWorks.module.css'
import Work from '../MyWorks/Work/Work';
import socialNetworkBg from '../../Assets/social_network.png';
import todolist from '../../Assets/todolist.png';
import cards from '../../Assets/card.png'
import counter from '../../Assets/counter.png'
import tourPlan from '../../Assets/tourplan.png'
import glo from '../../Assets/glo.png'

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
    description:'Team project, the project was made on React on functional components with hooks, written in TypeScript, Redux was used as state management, UI was developed using the MUI library, used Redux-thunk, React-Router-Dom, formik',
    source: 'https://github.com/DmitriyKaplan28/Friday',
    deployment: 'https://dmitriykaplan28.github.io/Friday/#/login',
    bg: cards
  },
  counter: {
    description:'Simple project made with react, redux and css',
    source: 'https://github.com/AlexeyKrop/counter.github.io',
    deployment: 'https://alexeykrop.github.io/counter.github.io/',
    bg: counter
  },
  glo: {
    description:'Glo static landing page. Written in JS, Bootstrap, CSS',
    source: 'https://github.com/AlexeyKrop/Glo',
    deployment: 'https://alexeykrop.github.io/Glo/',
    bg: glo
  },
  tourPlan: {
    description:'TourPlan simple static landing page for hotel. Written in HTML5, Sass, JQuery, PHPMiler',
    source: 'https://github.com/AlexeyKrop/tour-plan',
    deployment: 'https://alexeykrop.github.io/tour-plan/',
    bg: tourPlan
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
            <Work title={'Card'} source={descriptionWork.cards.source} deployment={descriptionWork.cards.deployment}
                  description={descriptionWork.cards.description} bg={descriptionWork.cards.bg}/>
            <Work title={'Counter'} source={descriptionWork.counter.source} deployment={descriptionWork.counter.deployment}
                  description={descriptionWork.counter.description} bg={descriptionWork.counter.bg}/>
            <Work title={'3DGlo'} source={descriptionWork.glo.source} deployment={descriptionWork.glo.deployment}
                  description={descriptionWork.glo.description} bg={descriptionWork.glo.bg}/>
            <Work title={'Tour-plan'} source={descriptionWork.tourPlan.source} deployment={descriptionWork.tourPlan.deployment}
                  description={descriptionWork.tourPlan.description} bg={descriptionWork.tourPlan.bg}/>
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