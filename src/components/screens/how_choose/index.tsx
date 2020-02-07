import React, {useState} from 'react';
import {NavigationPanel} from "../../navigation_panel";
import {TwoColumnLayout} from "../../layout/two_column_layout";
import {SectionType, SLIDES} from "./resources";
import {Carousel} from "../../carousel";
import css from './index.module.css';
import {nextRotationIndex, prevRotationIndex} from "../../../lib/rotate_index";
import {ImageDataType} from "../../../types/image_data";
import {NavHandler} from "../../nav_handler";

type Props = {
  onNext: () => void
  onPrev: () => void
}

type State = {
  slideIndex: number,
  sectionIndex: number
}

export class HowChooseScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      slideIndex: 0,
      sectionIndex: 0
    }
  }

  handleNavPanelItemClick = (slideIndex: number) => {
    this.setState({
      sectionIndex: 0,
      slideIndex: slideIndex
    })
  }

  handlePrevCarouselItem = () => {
    let nextSectionIndex = this.state.sectionIndex - 1
    let nextSlideIndex = this.state.slideIndex

    if (!SLIDES[nextSlideIndex].sections[nextSectionIndex]) {
      nextSlideIndex--

      if (!SLIDES[nextSlideIndex]) {
        this.props.onPrev()
        return
      }
      nextSectionIndex = SLIDES[nextSlideIndex].sections.length - 1
    }

    this.setState({
      sectionIndex: nextSectionIndex,
      slideIndex: nextSlideIndex
    })
  }
  handleNextCarouselItem = () => {
    let nextSectionIndex = this.state.sectionIndex + 1
    let nextSlideIndex = this.state.slideIndex

    if (!SLIDES[nextSlideIndex].sections[nextSectionIndex]) {
      nextSectionIndex = 0
      nextSlideIndex++
    }

    if (!SLIDES[nextSlideIndex]) {
      this.props.onNext()
      return
    }

    this.setState({
      sectionIndex: nextSectionIndex,
      slideIndex: nextSlideIndex
    });
  }

  render () {
    const {slideIndex, sectionIndex} = this.state

    const text = SLIDES[slideIndex].sections[sectionIndex].text;
    const flatSections = SLIDES.reduce<SectionType[]>(
        (result, slide) =>  result.concat(slide.sections),
      []);
    const flatSectionsIndex = SLIDES.reduce(
        (result, slide, i) => i < slideIndex ? result + slide.sections.length : result,
      0) + sectionIndex;

    return (
      <>
        <NavHandler onNext={this.handleNextCarouselItem} onPrev={this.handlePrevCarouselItem}/>
        <TwoColumnLayout
          title={'Как выбрать'}
          key={'layout'}
          renderHeader={() => <NavigationPanel
            items={SLIDES}
            currentItemIndex={slideIndex}
            onItemClick={this.handleNavPanelItemClick}
            classname={css.nav_panel}
          />}
          renderLeft={() => (
            <Carousel
              classname={css.carousel}
              items={flatSections}
              currentItemIndex={flatSectionsIndex}
              onPrev={this.handlePrevCarouselItem}
              onNext={this.handleNextCarouselItem}
              notActiveScale={0.8}
              renderItem={(section) => (
                <img src={section.image.src} className={css.image}/>
              )}
            />
          )}
          renderRight={() => <p className={css.text}>{text}</p>}
        />
      </>
    )
  }
}
