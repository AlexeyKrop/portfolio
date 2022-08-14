import React from 'react';
import s from "./Button.module.css";
type ButtonType = {
  callBack?: () => void
  name: string
}
export const Button = (props: ButtonType) => {
  return (
    <div>
      <button className={s.btn}>{props.name}</button>
    </div>
  );
};
