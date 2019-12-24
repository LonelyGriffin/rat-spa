import React, {ReactNode} from "react";
import css from "./index.module.css";

type Props = {
    children: ReactNode
}

export const Section = function<T>(props: Props) {
    return (
        <section className={css.root}>
            {props.children}
        </section>
    )
};
