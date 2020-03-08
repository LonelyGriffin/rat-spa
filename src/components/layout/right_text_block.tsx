const css = require("./right_text_block.module.css");
import cn from "classnames";
import React from "react";

type Props = {
  title: string
  text: string
}

export const LayoutRightTextBlock = (props: Props) => {
  const {text, title} = props

  return (
    <div className={css.root}>
      <h3  className={cn(css.header, css.fadein)} key={title}>{title}</h3>
      <p className={cn(css.text, css.fadein)} key={text}>{text}</p>
    </div>
  )
}
