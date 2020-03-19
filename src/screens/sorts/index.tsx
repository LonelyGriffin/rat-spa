import React, {useState} from 'react';
import {SLIDES} from "./resources";
const css = require('./index.module.css');
import {SlidedPage} from "../../components/slided_page";
import {Carousel} from "../../components/carousel";
import {ImageDataType} from "../../types/image_data";
import {nextRotationIndex, prevRotationIndex} from "../../lib/rotate_index";
import {NavContextConsumer} from "../../lib/nav_context";
import {SlideImage} from "../../components/slide_image";
import cn from "classnames"

export const SortsScreen = (props: {initialIndex: number}) => (
  <NavContextConsumer>
    {({onNextPage, onPrevPage, fromNextScreen}) => (
      <SlidedPage
        header={'Виды'}
        slides={SLIDES}
        renderSlide={(data: any, isActive, path, inView) => <Item images={data} isActive={isActive} path={path} inView={inView}/>}
        fromNextScreen={fromNextScreen}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        initialIndex={props.initialIndex}
      />
    )}
  </NavContextConsumer>
);

const Item = (props: {images: ImageDataType[], isActive: boolean, path: string, inView: boolean}) => {
  const {images, isActive} = props;
  const [index, setIndex] = useState(1);

  const handleNext = () => setIndex(nextRotationIndex(index, images.length));
  const handlePrev = () => setIndex(prevRotationIndex(index, images.length));

  if (!props.inView) {
    return <SlideImage img={images[0]} path={props.path} inView={false}/>
  }

  return (
    <div className={cn(css.sliderWrap, props.inView && css.inView)}>
      <Carousel
        horizontal
        items={images}
        currentItemIndex={index}
        notActiveScale={isActive ? 0.9 : 1}
        renderItem={(image, isActive, inView) => <SlideImage img={image} path={props.path} inView={inView}/>}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  )
};
