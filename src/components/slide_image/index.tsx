import React from "react";
import {ImageDataType} from "../../types/image_data";

const css = require('./index.module.css')

type Props = {
  path: string
  img: ImageDataType
}

export const SlideImage = (props: Props) => (
  <a  href={props.path} className={css.notActive}>
    <img src={props.img.src} className={css.image} alt={props.img.alt}/>
  </a>
);
