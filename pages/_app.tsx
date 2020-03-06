import './_app.css';
import React, {useState} from 'react';
const css = require("./_app.module.css");
const mainIconSrc = "/images/icons/main.svg";
const howCareSrc = "/images/icons/how_care.svg";
const howFindSrc = "/images/icons/how_find.svg";
const lifeSrc = "/images/icons/life.svg";
const sortsSrc = "/images/icons/sorts.svg";
import cn from "classnames";
import {NavigationWheel} from "../src/components/navigation_wheel";
import {NavContextProvider} from "../src/lib/nav_context";
import {useRouter} from "next/router";

const SCREENS = [
  {
    path: '/common',
    index: 0,
    title: 'Общая информация',
    icon: mainIconSrc,
  },
  {
    path: '/sorts',
    index: 1,
    title: 'Породы',
    icon: sortsSrc,
  },
  {
    path: '/how_choose',
    index: 2,
    title: 'Как выбрать',
    icon: howFindSrc,
  },
  {
    path: '/how_care',
    index: 3,
    title: 'Как ухаживать',
    icon: howCareSrc,
  },
  {
    path: '/life',
    index: 4,
    title: 'Как продлить жизнь',
    icon: lifeSrc,
  }
];

const keyToIndex = (key: string) => parseInt(key, 10) || 0;
const indexToKey = (index: number) => index >= 0 ? `${index}` : '0';
const getInitialScreenIndex = (url: string) => {
  let result = 0

  SCREENS.forEach(screen => {
    if (screen.path === url) {
      result = screen.index
    }
  })
  return result
}

const App = ({Component, props}: any) => {
  const router = useRouter()

  const [navContext, setNavContext] = useState({
    screenIndex: getInitialScreenIndex(router.pathname),
    fromNextScreen: false,
  });

  const onNextPage = () => {
    const screenIndex = navContext.screenIndex < SCREENS.length - 1 ? navContext.screenIndex + 1 : 0
    setNavContext({
      ...navContext,
      fromNextScreen: false,
      screenIndex
    });
    router.push(SCREENS[screenIndex].path)
  }
  const onPrevPage = () => {
    const screenIndex = navContext.screenIndex > 0 ? navContext.screenIndex - 1 : SCREENS.length - 1
    router.push(SCREENS[screenIndex].path)
    setNavContext({
      ...navContext,
      fromNextScreen: true,
      screenIndex
    })
  }

  const setScreenByKey = (key: string) => {
    const index = keyToIndex(key);
    setNavContext({
      ...navContext,
      fromNextScreen: false,
      screenIndex: index
    });
    router.push(SCREENS[index].path)
  };

  return (
    <NavContextProvider value={{...navContext, onNextPage, onPrevPage}}>
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
      <Component {...props}/>
    </NavContextProvider>
  )
};

export default App
