import { TRouteNode } from './routes';
import { TRouteData } from './../types/route_data';
import React from "react";

export type TLoadedRoute = {
  data: TRouteData
  routeNode: TRouteNode
}

export type StoreContextProps= {
  loadedRoutes: TLoadedRoute[]
  routeCursor: number
  hasCategoryPreLoading: boolean
  hasNearbyPreLoading: boolean
}

export type StoreContextValue = StoreContextProps & {
  setStoreProps: (props: Partial<StoreContextProps>) => void
}

export const StoreContext = React.createContext<StoreContextValue>({
  loadedRoutes: [],
  routeCursor: 0,
  hasCategoryPreLoading: false,
  hasNearbyPreLoading: false,
  setStoreProps: () => {},
});
export const StoreContextProvider = StoreContext.Provider;
export const StoreContextConsumer = StoreContext.Consumer;
