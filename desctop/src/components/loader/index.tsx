import React from 'react'
const css = require('./index.module.css')
import cn from 'classnames'

type Props = {
  percent: number
}

export const Loader = (props: Props) => {
  return (
    <div className={css.root}>
      <div className={css.wheel}>
        <div className={cn(css.panel, css.panel_1)} />
        <div className={cn(css.panel, css.panel_2)} />
        <div className={cn(css.panel, css.panel_3)} />
        <div className={cn(css.panel, css.panel_4)} />
        <div className={cn(css.panel, css.panel_5)} />
        <div className={css.base} />
      </div>
      <div className={css.percent}>{props.percent}</div>
    </div>
  )
}


