import React from 'react';
const css = require('./two_column_layout.module.css');
import {Header} from "./header";
import {CircledDivider} from "./circled_divider";
import {BottomShadow} from "./bottom_shadow";
import {MouseIcon} from "../mouse";

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
        {renderHeader && renderHeader()}
      </Header>
      <main className={css.main}>
        {renderBg && renderBg()}
        <aside className={css.left}>
          {renderLeft && renderLeft()}
          <div className={css.rightRadialShadow} />
          <div className={css.mouse}>
            <MouseIcon />
          </div>
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
