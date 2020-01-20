import React, {useState} from 'react';
import {NavigationPanel} from "../../navigation_panel";
import {TwoColumnLayout} from "../../layout/two_column_layout";
import {SectionType, SLIDES} from "./resources";
import {Carousel} from "../../carousel";
import css from './index.module.css';
import {nextRotationIndex, prevRotationIndex} from "../../../lib/rotate_index";
import {ImageDataType} from "../../../types/image_data";

const flatSectionIndexToSectionIndex = (index: number) => {
  let i = 0;
  let sectionIndex = 0;
  let slideIndex = 0;

  while (i < index) {
    i++;
    sectionIndex++;
    if (!SLIDES[slideIndex].sections[sectionIndex]) {
      sectionIndex = 0;
      slideIndex++;
    }
  }

  return sectionIndex;
};

const flatSectionIndexToSlideIndex = (index: number) => {
  let i = 0;
  let sectionIndex = 0;
  let slideIndex = 0;

  while (i < index) {
    i++;
    sectionIndex++;
    if (!SLIDES[slideIndex].sections[sectionIndex]) {
      sectionIndex = 0;
      slideIndex++;
    }
  }

  return slideIndex;
};

export const SortsScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const text = SLIDES[currentSlideIndex].sections[currentSectionIndex].text;
  const flatSections = SLIDES.reduce<SectionType[]>(
      (result, slide) =>  result.concat(slide.sections),
    []);
  const flatSectionsIndex = SLIDES.reduce(
      (result, slide, i) => i < currentSlideIndex ? result + slide.sections.length : result,
    0) + currentSectionIndex;

  const handleNavPanelItemClick = (slideIndex: number) => {
    setCurrentSectionIndex(0);
    setCurrentSlideIndex(slideIndex);
  };

  const handlePrevCarouselItem = () => {
    setCurrentSectionIndex(flatSectionIndexToSectionIndex(prevRotationIndex(flatSectionsIndex, flatSections.length)));
    setCurrentSlideIndex(flatSectionIndexToSlideIndex(prevRotationIndex(flatSectionsIndex, flatSections.length)));
  };

  const handleNextCarouselItem = () => {
    setCurrentSectionIndex(flatSectionIndexToSectionIndex(nextRotationIndex(flatSectionsIndex, flatSections.length)));
    setCurrentSlideIndex(flatSectionIndexToSlideIndex(nextRotationIndex(flatSectionsIndex, flatSections.length)));
  };

  return (
    <TwoColumnLayout
      renderHeader={() => <NavigationPanel
        items={SLIDES}
        currentItemIndex={currentSlideIndex}
        onItemClick={handleNavPanelItemClick}
      />}
      renderLeft={() => (
        <Carousel
          classname={css.carousel}
          items={flatSections}
          currentItemIndex={flatSectionsIndex}
          onPrev={handlePrevCarouselItem}
          onNext={handleNextCarouselItem}
          notActiveScale={0.8}
          renderItem={(section, isActive) => (
            <Item
              images={section.images}
              isActive={isActive}
            />
          )}
        />
      )}
      renderRight={() => <p>{text}</p>}
    />
  )
};

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
      renderItem={(image) => <img src={image.src} className={css.image}/>}
      onNext={handleNext}
      onPrev={handlePrev}
    />
  )
}