import {ComponentType} from "react";
import {HomePage} from "../pages/home";
import {DetailsPage} from "../pages/details";
import {BreedPage} from "../pages/breed";

export enum ROUTE_TYPES {
    HOME = 'HOME',
    DETAILS = 'DETAILS',
    BREED = 'BREED'
}

export const ROUTES_MAP = {
    [ROUTE_TYPES.HOME]: '/',
    [ROUTE_TYPES.DETAILS]: '/details',
    [ROUTE_TYPES.BREED]: '/breeds/:id'
};

type ComponentsMap = {
    [key: string]: ComponentType
}

export const COMPONENTS_MAP: ComponentsMap = {
    [ROUTE_TYPES.HOME]: HomePage,
    [ROUTE_TYPES.DETAILS]: DetailsPage,
    [ROUTE_TYPES.BREED]: BreedPage
};
