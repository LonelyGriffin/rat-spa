import React from 'react'
import { TDataNode } from '../../model/screen'
import { ImageCarousel } from '../image_carousel'
import css from './index.module.css'

type Props = {
  data: TDataNode
  setData: (newData: TDataNode) => void
}

export const PageWithSlider = (props: Props) => {
  const {title, text, images, imagesCursor} = props.data

  const setImagesCursor = (newImageCursor: number) => {
    props.setData({...props.data, imagesCursor: newImageCursor})
  }

  const initialImagesCursor = images && images.length > 1 ? 1 : 0

  return (
    <div className={css.root}>
      <div className={css.images}>
        {images && <ImageCarousel images={images} active={imagesCursor !== undefined ? imagesCursor : initialImagesCursor} setActive={setImagesCursor}/>}
      </div>
      <div className={css.content}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.text}>{text}</p>
      </div>
    </div>
  )
}