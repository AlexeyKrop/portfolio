import React from 'react';
import Skill from "./Skill/Skill";
import s from './MySkill.module.css'
import {DiReact} from "react-icons/di";
import {SiTypescript} from "@react-icons/all-files/si/SiTypescript";
import {SiRedux} from "@react-icons/all-files/si/SiRedux";
import {SiJavascript} from "@react-icons/all-files/si/SiJavascript";
import {AiFillHtml5} from "@react-icons/all-files/ai/AiFillHtml5";
import {DiCss3} from "@react-icons/all-files/di/DiCss3";
import {DiSass} from "@react-icons/all-files/di/DiSass";
import {BiGitBranch} from "@react-icons/all-files/bi/BiGitBranch";
import {SiJest} from "@react-icons/all-files/si/SiJest";
import { TbBrandReactNative } from 'react-icons/tb';
import {FaNode} from "@react-icons/all-files/fa/FaNode";
const MySkills = () => {
  return (
    <div className={s.wrapper} data-aos="fade-right" data-aos-delay="400" data-aos-duration="1200">
      <div className={s.content} id={'skills'}>
        <div className={s.about}>
          <div className={s.blockTitle}>
            <p className={s.title}>Professional Skillset</p>
          </div>
          <div className={s.block}>
            <Skill icon={<DiReact className={s.iconSkill}/>} title={'React'}/>
            <Skill icon={<SiRedux className={s.iconSkill}/>} title={'Redux'}/>
            <Skill icon={<SiRedux className={s.iconSkill}/>} title={'Redux Toolkit'}/>
            <Skill icon={<SiTypescript className={s.iconSkill}/>} title={'TS'}/>
            <Skill icon={<SiJavascript className={s.iconSkill}/>} title={'JS'}/>
            <Skill icon={<SiJest className={s.iconSkill}/>} title={'Unit test'}/>
            {/*<Skill icon={<TbBrandReactNative className={s.iconSkill}/>} title={'React Native'}/>*/}
            {/*<Skill icon={<FaNode className={s.iconSkill}/>} title={'Node JS'}/>*/}
            {/*<Skill icon={<AiFillHtml5 className={s.iconSkill}/>} title={'Html5'}/>*/}
            {/*<Skill icon={<DiCss3 className={s.iconSkill}/>} title={'Css'}/>*/}
            <Skill icon={<DiSass className={s.iconSkill}/>} title={'Sass'}/>
            <Skill icon={<BiGitBranch className={s.iconSkill}/>} title={'Git'}/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MySkills;