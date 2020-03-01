import React, {useEffect, useState} from 'react';
import {NavigationWheel} from "../navigation_wheel";
import {Noop} from "../noop";
import css from "./index.module.css";

import mainIconSrc from "./icons/main.svg";
import howCareSrc from "./icons/how_care.svg";
import howFindSrc from "./icons/how_find.svg";
import lifeSrc from "./icons/life.svg";
import sortsSrc from "./icons/sorts.svg";
import cn from "classnames";
import {Loader} from "../loader";
import {CommonScreen} from "../../screens/common";
import {SortsScreen} from "../../screens/sorts";
import {HowCareScreen} from "../../screens/how_care";
import {LifeScreen} from "../../screens/life";
import {HowChooseScreen} from "../../screens/how_choose";

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

let p = 100

export const App = () => {
  const [screenIndex, setScreenIndex] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(100);
  const [fromNextScreen, setFromNextScreen] = useState(false);
  const CurrentScreenComponent = SCREENS[screenIndex] ? SCREENS[screenIndex].component : Noop;


  useEffect(() => {
    const nextLoad = () => {
      const time = Math.random() * 500
      const addPercent = Math.random() * (Math.min(100 - percent, 20))

      setTimeout(() => {
        const newPercent = p + addPercent;

        if (newPercent > 98) {
          setPercent(100);
          setTimeout(() => {
            setIsLoading(false)
          }, 300)
        } else {
          setPercent(newPercent);
          p = newPercent;
          nextLoad();
        }
      }, time)
    }

    nextLoad()
  }, []);

  const setScreenByKey = (key: string) => {
    const index = keyToIndex(key);
    setFromNextScreen(false);
    setScreenIndex(index);
  };

  if (isLoading) {
    return  (
      <div className={css.loader}>
        <Loader percent={Math.round(percent)}/>
      </div>
    )
  }

  return (
    <>
      <NavigationWheel
        items={SCREENS}
        onItemClick={setScreenByKey}
        currentItemKey={indexToKey(screenIndex)}
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
      <CurrentScreenComponent
        onNextPage={() => {setFromNextScreen(false); setScreenIndex(screenIndex < SCREENS.length - 1 ? screenIndex + 1 : 0);}}
        onPrevPage={() => {setFromNextScreen(true); setScreenIndex(screenIndex > 0 ? screenIndex - 1 : SCREENS.length - 1)}}
        fromNextScreen={fromNextScreen}
      />
    </>
  )
};

