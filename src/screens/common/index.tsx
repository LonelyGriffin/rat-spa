import React from 'react';
import {NavHandler} from "../../components/nav_handler";

type Props = {
  onNextPage: () => void
  onPrevPage: () => void
  fromNextScreen: boolean
}

export const CommonScreen = (props: Props) => {
  return (
    <>
      <NavHandler onNext={props.onNextPage} onPrev={props.onPrevPage}/>
      <div>
        Общая информация
      </div>
    </>
  )
}
