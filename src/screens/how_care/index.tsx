import React from 'react';
import {SLIDES} from "./resources";
const css = require('./index.module.css');
import {SlidedPage} from "../../components/slided_page";
import {NavContextConsumer} from "../../components/app/nav_context";


export const HowCareScreen = () => (
  <NavContextConsumer>
    {({onNextPage, onPrevPage, fromNextScreen}) => (
      <SlidedPage
        header={'Как ухаживать'}
        slides={SLIDES}
        renderSlide={data => <img src={data.src} className={css.image}/>}
        fromNextScreen={fromNextScreen}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    )}
  </NavContextConsumer>
);
