import React from 'react';
import {SLIDES} from "./resources";
const css = require('./index.module.css');
import {SlidedPage} from "../../components/slided_page";
import {NavContextConsumer} from "../../lib/nav_context";


export const HowCareScreen = (props: {initialIndex: number}) => (
  <NavContextConsumer>
    {({onNextPage, onPrevPage, fromNextScreen}) => (
      <SlidedPage
        header={'Как ухаживать'}
        slides={SLIDES}
        renderSlide={(data: any, _, path: string) => <a  href={path} className={css.notActive}><img src={data.src} className={css.image}/></a>}
        fromNextScreen={fromNextScreen}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        initialIndex={props.initialIndex}
      />
    )}
  </NavContextConsumer>
);
