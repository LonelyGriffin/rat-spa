import React, { useRef, useEffect } from 'react'
import { TImage } from '../../types/image';
import css from './index.module.css'
import {Swipeable, EventData} from 'react-swipeable'
import BezierEasing from 'bezier-easing'

type Props = {
  active: number
  images: TImage[]
  setActive: (newActive: number) => void
}

const easeOutCirc = BezierEasing(0.445, 0.05, 0.55, 0.95)

export const ImageCarousel = (props: Props) => {
  const {images, active, setActive} = props
  const swipeRef = useRef(false)
  const horizontalRef = useRef(false)
  const slideRef = useRef<HTMLElement | null>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const slideHeightRef = useRef(0)
  const persentRef = useRef(0)
  const animatePendingRef = useRef(false)

  const animateTo = async (percent: number, duration: number) => new Promise(resolve => {
    animatePendingRef.current = true

    const startPercent = persentRef.current
    const percentDelta = (percent - startPercent) / duration
    const startTime = Date.now()

    const animationFn = () => {
      const now = Date.now()
      const elapsedTime = now - startTime
      const animationTime = duration * easeOutCirc(elapsedTime / duration)
      if (elapsedTime < duration) {
        persentRef.current = percentDelta * animationTime + startPercent
        updateListPosition()
        requestAnimationFrame(animationFn)
      } else {
        persentRef.current = percent
        updateListPosition()
        animatePendingRef.current = false
        resolve()
      }
    }

    requestAnimationFrame(animationFn)
  })

  const updateListPosition = () => {
    const listElement = listRef.current
    const height = slideHeightRef.current
    const percent = persentRef.current

    if (!listElement) {
      return
    }
    console.log(active, percent, height, (active + percent) * height)
    listElement.style.top = -(active + percent) * height + 'px'
  }

  const handleSwiping = (e: EventData) => {
    if (animatePendingRef.current) {
      return
    }
    if (!swipeRef.current) {
      swipeRef.current = true
      if (e.dir === 'Up' || e.dir === 'Down') {
        horizontalRef.current = true
      }
    }

    if (horizontalRef.current) {
      e.event.stopPropagation()
      persentRef.current = e.deltaY / slideHeightRef.current
      updateListPosition()
    }
  }

  const handleSwiped = async () => {
    if (animatePendingRef.current) {
      return
    }
    if (horizontalRef.current) {
      if (persentRef.current > 0) {
        if (active < images.length - 1) {
          await animateTo(1, 500)
          persentRef.current = 0
          setActive(active + 1)
        } else {
          await animateTo(0, 500)
        }
      } else {
        if (active > 0) {
          await animateTo(-1, 500)
          persentRef.current = 0
          setActive(active - 1)
        } else {
          await animateTo(0, 500)
        }
      }
    }

    swipeRef.current = false
    horizontalRef.current = false
  }

  useEffect(() => {
    const itemElement = slideRef.current

    if (!itemElement) {
      return
    }

    slideHeightRef.current = itemElement.offsetHeight
  }, [])

  useEffect(() => {
    updateListPosition()
  })

  return (
    <Swipeable
      onSwiping={handleSwiping}
      onSwiped={handleSwiped}
      trackMouse={true}
      delta={10}
      className={css.root}
      innerRef={x => slideRef.current = x}
    >
      <ul className={css.list} ref={listRef}>
        {images.map((image) => (
          <li key={image.src} className={css.item}>
            <img src={image.src} alt={image.alt} className={css.image}/>
          </li>
        ))}
      </ul>
    </Swipeable>
  )
}
