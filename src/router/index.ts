import {connectRoutes, LocationState} from "redux-first-router";
import {ROUTES_MAP} from "./routes_map";

const { reducer, middleware, enhancer } = connectRoutes(ROUTES_MAP);

export const routerReducer = reducer;
export const routerMiddleware = middleware;
export const routerEnhancer = enhancer;

export type RouterState = LocationState<string, any>;
