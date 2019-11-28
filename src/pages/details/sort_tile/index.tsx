import React from "react";
import css from "./index.module.css";
import Link from "redux-first-router-link";
import {RouteType} from "../../../router/routes_map";

type InnerProps = {
    name: string,
    img: string
}

export const SortTile = (props: InnerProps) => {
    return (
        <Link to={{type: RouteType.SORT, payload: {id: props.name}}} className={css.root}>
            <div className={css.bubble}/>
            <span className={css.title}>
                {props.name}
            </span>
            <div className={css.cover}>
                <img className={css.cover_img} src={props.img} alt={props.name}/>
            </div>
        </Link>
    )
}