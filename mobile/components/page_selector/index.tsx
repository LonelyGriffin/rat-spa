import React, { useRef, useEffect } from 'react'
import {WithStoreProps, withStore} from '../withStore'
import css from './index.module.css'
import {Swipeable, EventData, } from 'react-swipeable'
import BezierEasing from 'bezier-easing'

const easeOutCirc = BezierEasing(0.445, 0.05, 0.55, 0.95)

type Props = WithStoreProps & {
}

const PageSelectorComponent = (props: Props) => {
  const animationPercentRef = useRef(0)
  const hasAnimationRef = useRef(false)
  const screenWidth = useRef(0)
  const rootRef = useRef<HTMLDivElement>(null)

  const setAnimationState = (percent: number) => {
    animationPercentRef.current = percent

    const rootElement = rootRef.current

    if (!rootElement) {
      return
    }

    rootElement.style.left = `${100 * percent}%`
  }

  const handleSwiping = (e: EventData) => {
    if (e.dir !== 'Left' && e.dir !== 'Right') {
      return
    }

    const percent = - e.deltaX / screenWidth.current

    setAnimationState(percent)
  }

  //TODO вынести в утилс
  const animateTo = async (percent: number, duration: number) => new Promise(resolve => {
    hasAnimationRef.current = true

    const startPercent = animationPercentRef.current
    const percentDelta = (percent - startPercent) / duration
    const startTime = Date.now()

    const animationFn = () => {
      const now = Date.now()
      const elapsedTime = now - startTime
      const animationTime = duration * easeOutCirc(elapsedTime / duration)
      if (elapsedTime < duration) {
        const newPercent = percentDelta * animationTime + startPercent
        animationPercentRef.current = newPercent
        setAnimationState(newPercent)
        requestAnimationFrame(animationFn)
      } else {
        setAnimationState(percent)
        hasAnimationRef.current = false
        resolve()
      }
    }

    requestAnimationFrame(animationFn)
  })

  const handleSwiped = async (e: EventData) => {
    if (e.dir !== 'Left' && e.dir !== 'Right') {
      return
    }

    if (animationPercentRef.current > 0) {
      animateTo(1, 500)
    } else {
      animateTo(-1, 500)
    }
  }

  useEffect(() => {
    const rootElement = rootRef.current

    if (!rootElement) {
      return
    }

    screenWidth.current = rootElement.offsetWidth
  }, [])

  useEffect(() => {

  }, [props.store.routeCursor])

  return (
    <Swipeable
      onSwiping={handleSwiping}
      onSwiped={handleSwiped}
      trackMouse={true}
      className={css.root}
      delta={30}
    >
      <div className={css.pages} ref={rootRef}>
        <div className={css.page_left}></div>
        <div className={css.page_right}></div>
      </div>
    </Swipeable>
  )
}

export const PageSelector = withStore(PageSelectorComponent)