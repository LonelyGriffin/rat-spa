import React from "react";

export type NavContextValues = {
  screenIndex: number,
  fromNextScreen: boolean,
  hasNav: boolean,
}

export const NavContext = React.createContext({
  screenIndex: 0,
  fromNextScreen: false,
  hasNav: false,
  outWheelNav: false,
  onNextPage: () => {},
  onPrevPage: () => {},
  setValue: (values: Partial<NavContextValues>) => {},
});
export const NavContextProvider = NavContext.Provider;
export const NavContextConsumer = NavContext.Consumer;
