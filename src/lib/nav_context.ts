import React from "react";

const NavContext = React.createContext({
  screenIndex: 0,
  fromNextScreen: false,
  onNextPage: () => {},
  onPrevPage: () => {},
});
export const NavContextProvider = NavContext.Provider;
export const NavContextConsumer = NavContext.Consumer;
