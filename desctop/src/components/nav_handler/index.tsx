import {useEffect, useRef} from "react";

const NAV_DELAY = 1000

type Props = {
  onNext: () => void
  onPrev: () => void
}

let timerId: number | undefined = undefined
let hasDelay = false

export const NavHandler = (props: Props) => {
  const wheelHandler = (e: WheelEvent) => {
    if (Math.abs(e.deltaY) < 80 || hasDelay) {
      return
    }

    clearTimeout(timerId)

    const direction = e.deltaY > 0 ? 'next' : 'prev'

    hasDelay = true
    timerId = setTimeout(() => {
      hasDelay = false
    }, NAV_DELAY) as any

    if (direction === 'next') {
      props.onNext()
    }

    if (direction === 'prev') {
      props.onPrev()
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', wheelHandler);

    return () => {
      window.removeEventListener('wheel', wheelHandler);
    }
  }, []);

  return null;
};
