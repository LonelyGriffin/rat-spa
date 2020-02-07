import React from 'react';
import css from './index.module.css';
import cn from 'classnames';

export type NavigationPanelItem = {
  title: string
}

type Props = {
  items: NavigationPanelItem[]
  currentItemIndex: number
  onItemClick: (index: number) => void
  classname?: string
}

export const NavigationPanel = (props: Props) => {
  const {items, onItemClick, currentItemIndex, classname} = props;

  return (
    <div className={cn(css.root, classname)}>
      {items.map((item, i) => (
        <div
          className={css.item}
          key={i}
          onClick={() => onItemClick(i)}
          style={{
            zIndex: items.length - i
          }}
        >
          <div className={cn(css.panel, i === currentItemIndex && css.active)}>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  )
};
