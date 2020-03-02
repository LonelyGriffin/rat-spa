import React from 'react';
const css = require('./index.module.css');


export const Header = (props: React.PropsWithChildren<{}>) => {
  const {children} = props;

  return (
    <div className={css.root}>
      {children}
    </div>
  )
};
