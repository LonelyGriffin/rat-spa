import {combineReducers} from "redux";
import {routerReducer, RouterState} from "../../router";

export type RootState = {
    location: RouterState,
}

export const rootReducer = combineReducers({
    location: routerReducer
});
