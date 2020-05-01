import React from 'react'
import { TDataNode } from '../../model/screen'
import { ImageCarousel } from '../image_carousel'
import css from './index.module.css'
import { Swipeable, EventData } from 'react-swipeable'
import { useRef } from 'react';
import { Up ,Down} from '../../utils/swipe_orientaition'

type Props = {
  data: TDataNode
  setData: (newData: TDataNode) => void
}

export const PageWithSlider = (props: Props) => {
  const {title, text, images, imagesCursor} = props.data
  const isVerticalSwipeRef = useRef(false)
  const isFirstSwipeEvent = useRef(true)

  const setImagesCursor = (newImageCursor: number) => {
    props.setData({...props.data, imagesCursor: newImageCursor})
  }

  const initialImagesCursor = images && images.length > 1 ? 1 : 0

  const contnetSwipingHandler = (e: EventData) => {
    if(isFirstSwipeEvent.current) {
      isFirstSwipeEvent.current = false
      if (e.dir === Up() || e.dir === Down()) {
        isVerticalSwipeRef.current = true
      }
    }

    if (isVerticalSwipeRef.current) {
      e.event.stopPropagation()
    }
  }
  const contnetSwipedHandler = (e: EventData) => {
    if (isVerticalSwipeRef.current) {
      e.event.stopPropagation()
    }

    isFirstSwipeEvent.current = true
    isVerticalSwipeRef.current = false
  }

  return (
    <div className={css.root}>
      <div className={css.images}>
        {images && <ImageCarousel images={images} active={imagesCursor !== undefined ? imagesCursor : initialImagesCursor} setActive={setImagesCursor}/>}
      </div>
      <Swipeable
        onSwiping={contnetSwipingHandler}
        onSwiped={contnetSwipedHandler}
        className={css.content}
      >
        <h3 className={css.title}>{title}</h3>
        <p className={css.text}>{text}</p>
      </Swipeable>
    </div>
  )
}