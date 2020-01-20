import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import css from './index.module.css';
import cn from 'classnames';
import GSAP from "gsap";

export type NavigationPanelItem = {
  title: string
}

type Props<T> = {
  items: T[]
  currentItemIndex: number
  renderItem: (item: T, isActive: boolean) => React.ReactNode
  horizontal?: boolean
  classname?: string
  infinity?: boolean
  onNext?: (e: React.MouseEvent) => void
  onPrev?: (e: React.MouseEvent) => void
  notActiveScale?: number
}

export function Carousel<T>(props: Props<T>) {
  const {items, renderItem, horizontal, classname, currentItemIndex, onNext, onPrev, infinity, notActiveScale} = props;
  const scale = notActiveScale || 1;

  const [innerIndex, setInnerIndex] = useState<number>(currentItemIndex);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement>(null);


  const size = !firstItemRef.current ? 0 : horizontal ? firstItemRef.current.offsetWidth : firstItemRef.current.offsetHeight;
  const containerSize = !containerRef.current ? 0 : horizontal ? containerRef.current.offsetWidth : containerRef.current.offsetHeight;

  const calcShift = (index: number) => -size * (index + 0.5 + (infinity ? 1 : 0)) + containerSize / 2;
  const transformStyle = (shift: number) => horizontal ? `translateX(${shift}px)` : `translateY(${shift}px)`;
  const scaleStyle = (scale: number) => `scale(${scale}, ${scale})`;

  useEffect(() => {
    if (!mounted) {
      setMounted(true)
      return
    }

    if (infinity && currentItemIndex === 0 && innerIndex === items.length - 1) {
      GSAP.to(trackRef.current!, {
        [horizontal ? 'x' : 'y']: calcShift(-1),
        duration: 0
      });
    }

    if (infinity && currentItemIndex === items.length - 1 && innerIndex === 0) {
      GSAP.to(trackRef.current!, {
        [horizontal ? 'x' : 'y']: calcShift(items.length),
        duration: 0
      });
    }

    GSAP.to(trackRef.current!, {
      [horizontal ? 'x' : 'y']: calcShift(currentItemIndex),
      duration: 1,
      ease: 'power4.out',
      onComplete: () => {
        setInnerIndex(currentItemIndex);
      }
    });
  }, [currentItemIndex]);

  const shift = calcShift(innerIndex);

  const directionStyle: CSSProperties = {
    flexDirection: horizontal ? 'row' : 'column',
  };

  const containerStyle = {
    ...directionStyle,
    transform: transformStyle(shift),
    opacity: mounted ? 1 : 0
  }

  return (
    <div className={cn(css.root, classname)} style={directionStyle} ref={containerRef}>
      <div className={css.container} style={containerStyle} ref={trackRef}>
        {infinity && <div
            className={css.item}
            style={{order: -1, transform: scaleStyle(scale)}}
            key={'first_clone'}
            onClick={onPrev}
        >
          {renderItem(items[items.length - 1], false)}
        </div>}
        {items.map((item, i) => {
          return (
            <div
              className={css.item}
              style={{order: i, transform: scaleStyle(i === currentItemIndex ? 1 : scale)}}
              key={`${i}`}
              onClick={
                i < innerIndex
                  ? onPrev
                  : i > innerIndex
                  ? onNext
                  : undefined
              }
              ref={i === 0 ? firstItemRef : undefined}
            >
              {renderItem(item, currentItemIndex === i)}
            </div>
        )})}
        {infinity && <div
          className={css.item}
          style={{order: items.length, transform: scaleStyle(scale)}}
          key={'last_clone'}
          ref={firstItemRef}
          onClick={onNext}
        >
          {renderItem(items[0], false)}
        </div>}
      </div>
    </div>
  )
}
