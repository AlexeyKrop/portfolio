import React, {useState} from 'react';
import s from "./Work.module.css";
import {Button} from "../../Button/Button";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {IoEarth} from "@react-icons/all-files/io5/IoEarth";

type WorkProps = {
  deployment?: string
  source?: string
  title?: string
  description?:string
  bg?: any
}
const Work = (props: WorkProps) => {
  const [scale, setScale] = useState(1.15);
  return (
    <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
      <div className={s.wrapper} data-aos="fade-right" data-aos-delay="400" data-aos-duration="1200">
        <div className={s.block__title}  style={{
          backgroundImage: `url(${props.bg ? props.bg : 'https://img.tourister.ru/files/2/5/3/2/5/1/3/1/original.jpg'})`,
        }} >
          <div className={s.btnGroup}>
            <Button href={props.source} name={'View Source'} icon={<AiFillGithub/>}/>
            <Button href={props.deployment} name={'Deployment'} icon={<IoEarth/>}/></div>
        </div>
        <div className={s.descriptionTitle}>
          <p className={s.title}>{props.title}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default Work;