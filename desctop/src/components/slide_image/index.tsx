import React from "react";
import {ImageDataType} from "../../types/image_data";
import cn from "classnames";

const css = require('./index.module.css')

type Props = {
  path: string
  img: ImageDataType,
  inView: boolean
}

export const SlideImage = (props: Props) => (
  <a href={props.path} className={cn(css.link, css.inView)}>
    {
      props.inView
        ? <img src={props.img.src} className={css.image} alt={props.img.alt}/>
        : <div className={css.image}/>
    }
  </a>
);
