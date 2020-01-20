import React from 'react';
import css from './index.module.css';


export const Header = (props: React.PropsWithChildren<{}>) => {
  const {children} = props;

  return (
    <div className={css.root}>
      {children}
    </div>
  )
};
