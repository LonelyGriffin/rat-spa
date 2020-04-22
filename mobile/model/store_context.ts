import React from "react";
import { TDataNode } from "./screen";

export type StoreContextProps= {
  data: TDataNode[]
  cursor: number
}

export type StoreContextValue = StoreContextProps & {
  setStoreProps: (props: Partial<StoreContextProps>) => void
}

export const StoreContext = React.createContext<StoreContextValue>({
  data: [],
  cursor: 0,
  setStoreProps: () => {},
});
export const StoreContextProvider = StoreContext.Provider;
export const StoreContextConsumer = StoreContext.Consumer;

export const increseCursor = (context: StoreContextValue) => ({
  ...context,
  cursor: context.cursor + 1 >= context.data.length ? 0 : context.cursor + 1
})

export const decreaseCursor = (context: StoreContextValue) => ({
  ...context,
  cursor: context.cursor === 0 ? context.data.length - 1 : context.cursor - 1
})

export const getPrevDataItem = (context: StoreContextValue) => {
  const {data, cursor} = decreaseCursor(context)
  return data[cursor]
}

export const getNextDataItem = (context: StoreContextValue) => {
  const {data, cursor} = increseCursor(context)
  return data[cursor]
}