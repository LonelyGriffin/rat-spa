import React, {useState} from 'react';
import {SLIDES} from "./resources";
const css = require('./index.module.css');
import {SlidedPage} from "../../components/slided_page";
import {Carousel} from "../../components/carousel";
import {ImageDataType} from "../../types/image_data";
import {nextRotationIndex, prevRotationIndex} from "../../lib/rotate_index";
import {NavContextConsumer} from "../../components/app/nav_context";

export const SortsScreen = () => (
  <NavContextConsumer>
    {({onNextPage, onPrevPage, fromNextScreen}) => (
      <SlidedPage
        header={'Виды'}
        slides={SLIDES}
        renderSlide={(data, isActive) => <Item images={data} isActive={isActive} />}
        fromNextScreen={fromNextScreen}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    )}
  </NavContextConsumer>
);


const Item = (props: {images: ImageDataType[], isActive: boolean}) => {
  const {images, isActive} = props;
  const [index, setIndex] = useState(1);

  const handleNext = () => setIndex(nextRotationIndex(index, images.length));
  const handlePrev = () => setIndex(prevRotationIndex(index, images.length));

  return (
    <Carousel
      horizontal
      items={images}
      currentItemIndex={index}
      notActiveScale={isActive ? 0.9 : 1}
      renderItem={(image) => <img src={image.src} className={css.image} alt={image.alt}/>}
      onNext={handleNext}
      onPrev={handlePrev}
    />
  )
};
