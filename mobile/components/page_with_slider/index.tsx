import React from 'react'
import { TDataNode } from '../../model/screen'

type Props = {
  data: TDataNode
}

export const PageWithSlider = (props: Props) => {
  const {title, text} = props.data

  return (
    <div>
      <div></div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}