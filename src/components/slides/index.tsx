import React, {ComponentType, useEffect, useState} from "react";
import {debounce} from "lodash-es";

type Props = {
  slides: Array<ComponentType>
  onPrev?: () => void
  onNext?: () => void
}

export const Slides = (props: Props) => {
  const MAX_WHEEL_COUNT_TO_ONE_SIDE = 3;
  const [index, setIndex] = useState(0);

  const next = debounce(() => {
    const newIndex = index + 1;

    if (newIndex < props.slides.length) {
      setIndex(newIndex);
    } else {
      props.onNext && props.onNext();
    }
  }, 200);

  const prev = debounce(() => {
    const newIndex = index - 1;

    if (newIndex >= 0) {
      setIndex(newIndex);
    } else {
      props.onPrev && props.onPrev();
    }
  }, 200);

  useEffect(() => {
    let wheelCountToOneSide = 0;
    let timerID: any;

    const listener = (e: WheelEvent) => {
      console.log(e.deltaY)
      e.preventDefault();

      if (Math.sign(wheelCountToOneSide) !== Math.sign(e.deltaY)) {
        wheelCountToOneSide = 0;
      }

      wheelCountToOneSide += Math.sign(e.deltaY);

      if (Math.abs(wheelCountToOneSide) > MAX_WHEEL_COUNT_TO_ONE_SIDE) {
        if (Math.sign(e.deltaY) > 0) {
          next();
        } else {
          prev();
        }
      }

      clearTimeout(timerID);
      timerID = setTimeout(() => {
        wheelCountToOneSide = 0;
      }, 500)
    };
    window.addEventListener('wheel', listener);
    return () => {
      clearTimeout(timerID);
      window.removeEventListener('wheel', listener);
    }
  });

  const CurrentSection = props.slides[index] || null;

  return (
    <CurrentSection />
  );
};
