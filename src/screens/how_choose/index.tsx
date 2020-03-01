import React from 'react';
import {SLIDES} from "./resources";
import css from './index.module.css';
import {SlidedPage} from "../../components/slided_page";

type Props = {
  onNextPage: () => void
  onPrevPage: () => void
  fromNextScreen: boolean
}

export const HowChooseScreen = (props: Props) => (
  <SlidedPage
    header={'Как ухаживать'}
    slides={SLIDES}
    renderSlide={data => <img src={data.src} className={css.image}/>}
    {...props}
  />
);
