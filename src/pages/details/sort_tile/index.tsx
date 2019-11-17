import React from "react";
import css from "./index.module.css";
import Link from "redux-first-router-link";
import {RouteType} from "../../../router/routes_map";

type InnerProps = {
    name: string,
    img: string
}

export const SortTile = (props: InnerProps) => (
    <div className={css.root}>
        {props.name}
        <Link to={{type: RouteType.SORT, payload: {id: props.name}}} className={css.cover}>
            <img className={css.cover_img} src={props.img} alt={props.name}/>
        </Link>
    </div>
)