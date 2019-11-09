import {rootReducer, RootState} from "./reducer";
import { applyMiddleware, createStore } from 'redux'
import {routerEnhancer, routerMiddleware} from "../router";
import { composeWithDevTools } from 'redux-devtools-extension';

export const mStore = (initialState?: RootState) => {
    const middlewares = applyMiddleware(routerMiddleware);
    const enhancers = composeWithDevTools(routerEnhancer, middlewares);

    return createStore(rootReducer, initialState, enhancers);
};
