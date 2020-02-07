import React, {useState} from 'react';
import {NavHandler} from "../../nav_handler";
import css from './index.module.css';

type Props = {
  onNext: () => void
  onPrev: () => void
}

export const LifeScreen = (props: Props) => {
  return (
    <>
      <NavHandler onNext={props.onNext} onPrev={props.onPrev}/>
      <div className={css.root}>
        <h1 className={css.title}>Как продлить жизнь</h1>
        <div className={css.content}>
          <div className={css.center}>
            <div className={css.mouse} />
          </div>
        </div>
      </div>
    </>
  )
}
