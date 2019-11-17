import React from "react";
import css from "./index.module.css";

type InnerProps = {
    children: React.ReactNode
}

export const Uppercase = (props: InnerProps) => <span className={css.root}>{props.children}</span>