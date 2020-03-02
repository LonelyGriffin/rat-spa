import React from 'react';
import {NavHandler} from "../../components/nav_handler";
import {NavContextConsumer} from "../../components/app/nav_context";


export const CommonScreen = () => {
  return (
    <NavContextConsumer>
      {({onNextPage, onPrevPage}) => (
        <>
          <NavHandler onNext={onNextPage} onPrev={onPrevPage}/>
          <div>
            Общая информация
          </div>
        </>
      )}
    </NavContextConsumer>
  )
};
