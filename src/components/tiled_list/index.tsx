import React from "react";
import css from "./index.module.css";
import cn from "classnames";

type InnerProps<T> = {
    data: T[]
    renderItem: (item: T) => React.ReactNode
    extractKey: (item: T) => string | number
    classnames?: {
        root?: string
        tile?: string
    }
}

export const TiledList = function<T>(props: InnerProps<T>) {
    const {renderItem, extractKey, data, classnames} = props;

    const c = classnames || {};

    return (
        <ul className={cn(css.tiled_list, c.root)}>
            {data.map(item => (
                <li className={cn(css.tile, c.tile)} key={extractKey(item)}>
                    {renderItem(item)}
                </li>
            ))}
        </ul>
    )
};
