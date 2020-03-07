import React from 'react';
import {LayoutRightTextBlock} from "../layout/right_text_block";
import {Carousel} from "../carousel";
import {NavigationPanel} from "../navigation_panel";
import {TwoColumnLayout} from "../layout/two_column_layout";
import {NavHandler} from "../nav_handler";
import {RoutePoint} from "../../lib/route";
import {NextRouter, withRouter} from "next/router";
const css = require('./index.module.css');
import cn from 'classnames'
import {NavContext} from "../../lib/nav_context";

export type SectionType<T> = {
  path: RoutePoint
  subtitle: string
  text: string
  data: T
}

export type SlideType<T> = {
  title: string,
  sections: SectionType<T>[]
}

type Props<T> = {
  initialIndex: number
  header: string
  slides: SlideType<T>[]
  onNextPage: () => void
  onPrevPage: () => void
  fromNextScreen: boolean
  renderSlide: (data: T, isActive: boolean, path: string) => React.ReactNode
  router: NextRouter
  hideTopNavPanel?: boolean
}

type State = {
  initialIndex: number
  slideIndex: number,
  sectionIndex: number
}

const flatIndexToSlideSection = (flatIndex: number, slides: SlideType<any>[]) => {
  let slideIndex = 0;
  let sectionIndex = 0;
  let  i = 0;

  while(i < flatIndex) {
    sectionIndex++
    if (!slides[slideIndex].sections[sectionIndex]) {
      slideIndex++
      sectionIndex = 0
    }
    i++
  }

  return {slideIndex, sectionIndex}
};

class SlidedPageComponent<T> extends React.Component<Props<T>, State> {
  static contextType = NavContext;
  static getDerivedStateFromProps (props: Props<any>, state: State) {
    const needUpdateSlideIndex = state.initialIndex != props.initialIndex
    const {slideIndex, sectionIndex} = needUpdateSlideIndex ? flatIndexToSlideSection(props.initialIndex, props.slides) : state

    return {
      ...state,
      initialIndex: needUpdateSlideIndex  ? props.initialIndex : state.initialIndex,
      slideIndex,
      sectionIndex
    }
  }

  constructor(props: Props<T>) {
    super(props);

    this.state = {
      initialIndex: 0,
      slideIndex: props.fromNextScreen ? props.slides.length - 1 : 0,
      sectionIndex: props.fromNextScreen ? props.slides[props.slides.length - 1].sections.length - 1 : 0
    }
  }

  handleNavPanelItemClick = (slideIndex: number) => {
    this.setState({
      sectionIndex: 0,
      slideIndex: slideIndex
    })
  };

  handlePrevCarouselItem = () => {
    let nextSectionIndex = this.state.sectionIndex - 1;
    let nextSlideIndex = this.state.slideIndex;

    if (!this.props.slides[nextSlideIndex].sections[nextSectionIndex]) {
      nextSlideIndex--;

      if (!this.props.slides[nextSlideIndex]) {
        this.props.onPrevPage();
        return
      }
      nextSectionIndex = this.props.slides[nextSlideIndex].sections.length - 1
    }

    const url = this.props.slides[nextSlideIndex].sections[nextSectionIndex].path.path
    history.pushState(null, null as any, url);
    this.context.setContextValues({hasNav: true});
    this.setState({
      sectionIndex: nextSectionIndex,
      slideIndex: nextSlideIndex
    })
  };
  handleNextCarouselItem = () => {
    let nextSectionIndex = this.state.sectionIndex + 1;
    let nextSlideIndex = this.state.slideIndex;

    if (!this.props.slides[nextSlideIndex].sections[nextSectionIndex]) {
      nextSectionIndex = 0;
      nextSlideIndex++
    }

    if (!this.props.slides[nextSlideIndex]) {
      this.props.onNextPage();
      return
    }

    const url = this.props.slides[nextSlideIndex].sections[nextSectionIndex].path.path

    history.pushState(null, null as any, url)
    this.context.setContextValues({hasNav: true});
    this.setState({
      sectionIndex: nextSectionIndex,
      slideIndex: nextSlideIndex
    });
  };

  renderCarouselItem = (section: SectionType<T>, isActive: boolean) => this.props.renderSlide(section.data, isActive, section.path.path);

  render () {
    const {slideIndex, sectionIndex} = this.state;
    const text = this.props.slides[slideIndex].sections[sectionIndex].text;
    const subtitle = this.props.slides[slideIndex].sections[sectionIndex].subtitle;
    const flatSections = this.props.slides.reduce<SectionType<T>[]>(
        (result, slide) =>  result.concat(slide.sections),
      []);
    const flatSectionsIndex = this.props.slides.reduce(
        (result, slide, i) => i < slideIndex ? result + slide.sections.length : result,
      0) + sectionIndex;

    return (
      <>
        <NavHandler onNext={this.handleNextCarouselItem} onPrev={this.handlePrevCarouselItem}/>
        <TwoColumnLayout
          key={'layout'}
          renderHeader={() => (
            <>
              <h1 className={cn(css.title, this.props.hideTopNavPanel && css.title_without_top_nav_panel)}>{this.props.header}</h1>
              {!this.props.hideTopNavPanel && <NavigationPanel
                items={this.props.slides}
                currentItemIndex={slideIndex}
                onItemClick={this.handleNavPanelItemClick}
                classname={css.nav_panel}
              />}
            </>
          )}
          renderLeft={() => (
            <Carousel
              classname={css.carousel}
              items={flatSections}
              currentItemIndex={flatSectionsIndex}
              onPrev={this.handlePrevCarouselItem}
              onNext={this.handleNextCarouselItem}
              notActiveScale={0.8}
              renderItem={this.renderCarouselItem}
            />
          )}
          renderRight={() => <LayoutRightTextBlock title={subtitle} text={text} />}
        />
      </>
    )
  }
}

export const SlidedPage = withRouter(SlidedPageComponent);
