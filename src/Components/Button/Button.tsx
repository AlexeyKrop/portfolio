import React from 'react';
import s from "./Button.module.css";

type ButtonType = {
  callBack?: () => void
  name: string
  href?: string
  icon?: any,
  type?: "button" | "submit" | "reset" | undefined
}
export const Button = (props: ButtonType) => {
  return (
    <div>
      <button type={props.type} className={s.btn}>
        {props.icon}
        <a className={s.link} target="_blank"  rel="noopener noreferrer" href={props.href}>{props.name}</a>
      </button>
    </div>
  );
};
