import {Action, connectRoutes, LocationState, Query} from "redux-first-router";
import {ROUTES_MAP, RouteType} from "./routes_map";
import {useContext} from "react";
import {ReactReduxContext, ReactReduxContextValue} from "react-redux";

export type RouterState = LocationState<string, any>;
export type RouterAction = Action

const { reducer, middleware, enhancer } = connectRoutes(ROUTES_MAP);

export const routerReducer = reducer;
export const routerMiddleware = middleware;
export const routerEnhancer = enhancer;

export const useRouter = () => {
    const {store} = useContext<ReactReduxContextValue<RouterState, RouterAction>>(ReactReduxContext);

    return {
        dispatch(routerAction: RouterAction) {
            store.dispatch(routerAction)
        },
        navigateTo(routeType: RouteType, query?: Query) {
            store.dispatch({
                type: routeType,
                query: query
            })
        }
    }
}
