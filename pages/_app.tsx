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
import {NavContextProvider, NavContextValues} from "../src/lib/nav_context";
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
    title: 'Виды',
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
  let result = null

  SCREENS.forEach(screen => {
    if (url.includes(screen.path)) {
      result = screen.index
    }
  })
  return result
}

const App = ({Component, props, pageProps}: any) => {
  if (pageProps.statusCode) {
    return <Component {...pageProps}/>
  }

  const router = useRouter()

  const screenIndex = getInitialScreenIndex(router.pathname)

  const [navContext, setNavContext] = useState({
    screenIndex: screenIndex || 0,
    fromNextScreen: false,
    hasNav: false,
    outWheelNav: screenIndex === null
  });

  const onNextPage = () => {
    const screenIndex = navContext.screenIndex < SCREENS.length - 1 ? navContext.screenIndex + 1 : 0
    setNavContext({
      ...navContext,
      fromNextScreen: false,
      screenIndex,
      hasNav: true
    });
    router.push(SCREENS[screenIndex].path)
  }
  const onPrevPage = () => {
    const screenIndex = navContext.screenIndex > 0 ? navContext.screenIndex - 1 : SCREENS.length - 1
    router.push(SCREENS[screenIndex].path)
    setNavContext({
      ...navContext,
      fromNextScreen: true,
      screenIndex,
      hasNav: true,
      outWheelNav: false
    })
  }

  const setScreenByKey = (key: string) => {
    const index = keyToIndex(key);
    setNavContext({
      ...navContext,
      fromNextScreen: false,
      screenIndex: index,
      outWheelNav: false
    });
    router.push(SCREENS[index].path)
  };

  const setContextValues = (values: Partial<NavContextValues>) => {
    setNavContext({
      ...navContext,
      ...values
    });
  };

  const handleAbout = () => {
    setNavContext({
      ...navContext,
      outWheelNav: true
    });
  };

  return (
    <NavContextProvider value={{...navContext, onNextPage, onPrevPage, setContextValues}}>
      <NavigationWheel
        items={SCREENS}
        onItemClick={setScreenByKey}
        currentItemKey={indexToKey(navContext.screenIndex)}
        extractKey={item => indexToKey(item.index)}
        onClickAbout={handleAbout}
        outWheelNav={navContext.outWheelNav}
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
