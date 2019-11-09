import React from 'react';
import bgSrc from './bg.jpg';
import css from './index.module.css';
import Link from "redux-first-router-link";
import {ROUTE_TYPES} from "../../router/routes_map";

export const HomePage = () => {
    return (
        <Link to={{type: ROUTE_TYPES.DETAILS}} className={css.root}>
            <img className={css.img} src={bgSrc}/>
        </Link>
    )
};
