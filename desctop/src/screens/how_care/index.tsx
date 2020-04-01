import React from 'react';
import {SLIDES} from "./resources";
const css = require('./index.module.css');
import {SlidedPage} from "../../components/slided_page";
import {NavContextConsumer} from "../../lib/nav_context";
import {SlideImage} from "../../components/slide_image";


export const HowCareScreen = (props: {initialIndex: number}) => (
  <NavContextConsumer>
    {({onNextPage, onPrevPage, fromNextScreen}) => (
      <SlidedPage
        header={'Как ухаживать'}
        slides={SLIDES}
        renderSlide={(data: any, _, path: string, inView: boolean) => <SlideImage img={data} path={path} inView={inView}/>}
        fromNextScreen={fromNextScreen}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        initialIndex={props.initialIndex}
      />
    )}
  </NavContextConsumer>
);
