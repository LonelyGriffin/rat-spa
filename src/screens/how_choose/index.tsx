import React from 'react';
import {SLIDES} from "./resources";
const css = require('./index.module.css');
import {SlidedPage} from "../../components/slided_page";
import {NavContextConsumer} from "../../lib/nav_context";

export const HowChooseScreen = (props: {initialIndex: number}) => (
  <NavContextConsumer>
    {({onNextPage, onPrevPage, fromNextScreen}) => (
      <SlidedPage
        header={'Как ухаживать'}
        slides={SLIDES}
        renderSlide={(data: any) => <img src={data.src} className={css.image}/>}
        fromNextScreen={fromNextScreen}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        initialIndex={props.initialIndex}
      />
    )}
  </NavContextConsumer>
);
