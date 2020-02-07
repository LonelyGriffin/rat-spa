import React from 'react';
import css from './two_column_layout.module.css';
import {Header} from "./header";
import {CircledDivider} from "./circled_divider";
import {BottomShadow} from "./bottom_shadow";

type Props = {
  renderHeader?: () => React.ReactNode
  renderBg?: () => React.ReactNode
  renderLeft?: () => React.ReactNode
  renderRight?: () => React.ReactNode
}

export const TwoColumnLayout = (props: Props) => {
  const {renderHeader, renderBg, renderLeft, renderRight} = props;

  return (
    <div className={css.root}>
      <Header>
        <h1 className={css.title}>Породы</h1>
        {renderHeader && renderHeader()}
      </Header>
      <main className={css.main}>
        {renderBg && renderBg()}
        <aside className={css.left}>
          {renderLeft && renderLeft()}
          <div className={css.rightRadialShadow} />
        </aside>
        <CircledDivider />
        <aside className={css.right}>
          {renderRight && renderRight()}
        </aside>
        <BottomShadow classnames={css.bottomShadow}/>
      </main>
    </div>
  )
};
