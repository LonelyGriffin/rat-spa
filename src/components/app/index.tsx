import React, {useState} from 'react';
import {NavigationWheel} from "../navigation_wheel";
import {Noop} from "../noop";
import {SortsScreen} from "../screens/sorts";

const SCREENS = [
  {
    index: 0,
    title: 'Общая информация',
    component: () => <div>{'Общая информация'}</div>
  },
  {
    index: 1,
    title: 'Породы',
    component: SortsScreen
  },
  {
    index: 2,
    title: 'Как выбрать',
    component: () => <div>{'Как выбрать'}</div>
  },
  {
    index: 3,
    title: 'Как ухаживать',
    component: () => <div>{'Как ухаживать'}</div>
  },
  {
    index: 4,
    title: 'Как продлить жизнь',
    component: () => <div>{'Как продлить жизнь'}</div>
  }
];

const keyToIndex = (key: string) => parseInt(key, 10) || 0;
const indexToKey = (index: number) => index >= 0 ? `${index}` : '0';

export const App = () => {
  const [screenIndex, setScreenIndex] = useState(1);
  const CurrentScreenComponent = SCREENS[screenIndex] ? SCREENS[screenIndex].component : Noop;

  const setScreenByKey = (key: string) => {
    const index = keyToIndex(key);
    setScreenIndex(index);
  };

  return (
    <>
      <NavigationWheel
        items={SCREENS}
        onItemClick={setScreenByKey}
        currentItemKey={indexToKey(screenIndex)}
        extractKey={item => indexToKey(item.index)}
        extractTitle={item => item.title}
      />
      <CurrentScreenComponent />
    </>
  )
};

