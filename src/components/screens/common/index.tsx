import React from 'react';
import {NavHandler} from "../../nav_handler";

type Props = {
  onNext: () => void
  onPrev: () => void
}

export const CommonScreen = (props: Props) => {
  return (
    <>
      <NavHandler onNext={props.onNext} onPrev={props.onPrev}/>
      <div>
        Общая информация
      </div>
    </>
  )
}
