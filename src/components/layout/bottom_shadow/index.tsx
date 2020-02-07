import React from 'react';
import css from './index.module.css';
import cn from 'classnames';


export const BottomShadow = (props: {classnames?: string}) => {

  return (
    <div className={cn(css.root, props.classnames)} />
  )
};
