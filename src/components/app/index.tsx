import React, {useEffect, useState} from 'react';
import {NavigationWheel} from "../navigation_wheel";
import {Noop} from "../noop";
const css = require("./index.module.css");

const mainIconSrc = "/images/icons/main.svg";
const howCareSrc = "/images/icons/how_care.svg";
const howFindSrc = "/images/icons/how_find.svg";
const lifeSrc = "/images/icons/life.svg";
const sortsSrc = "/images/icons/sorts.svg";
import cn from "classnames";
import {CommonScreen} from "../../screens/common";
import {SortsScreen} from "../../screens/sorts";
import {HowCareScreen} from "../../screens/how_care";
import {LifeScreen} from "../../screens/life";
import {HowChooseScreen} from "../../screens/how_choose";
import {NavContextProvider} from "./nav_context";

const SCREENS = [
  {
    index: 0,
    title: 'Общая информация',
    icon: mainIconSrc,
    component: CommonScreen
  },
  {
    index: 1,
    title: 'Породы',
    icon: sortsSrc,
    component: SortsScreen
  },
  {
    index: 2,
    title: 'Как выбрать',
    icon: howFindSrc,
    component: HowChooseScreen
  },
  {
    index: 3,
    title: 'Как ухаживать',
    icon: howCareSrc,
    component: HowCareScreen
  },
  {
    index: 4,
    title: 'Как продлить жизнь',
    icon: lifeSrc,
    component: LifeScreen
  }
];

const keyToIndex = (key: string) => parseInt(key, 10) || 0;
const indexToKey = (index: number) => index >= 0 ? `${index}` : '0';

export const App = () => {
  const [navContext, setNavContext] = useState({
    screenIndex: 0,
    fromNextScreen: false,
    onNextPage: () => setNavContext({
      ...navContext,
      fromNextScreen: false,
      screenIndex: navContext.screenIndex < SCREENS.length - 1 ? navContext.screenIndex + 1 : 0
    }),
    onPrevPage: () => setNavContext({
      ...navContext,
      fromNextScreen: true,
      screenIndex: navContext.screenIndex > 0 ? navContext.screenIndex - 1 : SCREENS.length - 1
    }),
  });

  const CurrentScreenComponent = SCREENS[navContext.screenIndex] ? SCREENS[navContext.screenIndex].component : Noop;

  const setScreenByKey = (key: string) => {
    const index = keyToIndex(key);
    setNavContext({
      ...navContext,
      fromNextScreen: false,
      screenIndex: index
    });
  };

  return (
    <NavContextProvider value={navContext}>
      <NavigationWheel
        items={SCREENS}
        onItemClick={setScreenByKey}
        currentItemKey={indexToKey(navContext.screenIndex)}
        extractKey={item => indexToKey(item.index)}
        renderItem={(item, isExpanded) => {
          return (
            <div className={cn(css.nav_item, isExpanded && css.nav_item_active)}>
              <div className={css.nav_item_content}>
                <div className={css.nav_item_title}>
                {item.title}
                </div>
              </div>
              <div className={css.nav_item_icon} style={{backgroundImage: `url(${item.icon})`}}/>
            </div>
          )
        }}
      />
      <CurrentScreenComponent />
    </NavContextProvider>
  )
};

