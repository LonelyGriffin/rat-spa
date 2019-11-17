import {ComponentType} from "react";
import {HomePage} from "../pages/home";
import {DetailsPage} from "../pages/details";
import {BreedPage} from "../pages/breed";
import {Dictionary} from "../types/dictioanary";

const BASE = process.env.NODE_ENV === 'production' ? "/rat-spa" : "";

export enum RouteType {
    HOME = 'HOME',
    DETAILS = 'DETAILS',
    SORT = 'BREED'
}

export const ROUTES_MAP = {
    [RouteType.HOME]: `${BASE}/`,
    [RouteType.DETAILS]: `${BASE}/details`,
    [RouteType.SORT]: `${BASE}/sort/:id'`
};

export const COMPONENTS_MAP: Dictionary<ComponentType> = {
    [RouteType.HOME]: HomePage,
    [RouteType.DETAILS]: DetailsPage,
    [RouteType.SORT]: BreedPage
};
