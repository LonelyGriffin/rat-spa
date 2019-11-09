import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../store/reducer";
import {RouterState} from "../../router";
import css from "./index.module.css";

type InnerProps = {
    router: RouterState
}

export const BreedPageComponent = (props: InnerProps) => (
    <div className={css.root}>
        <header className={css.header_section}>
            <h1>{props.router.payload.id}</h1>
        </header>
    </div>
)


export const BreedPage = connect(
    (state: RootState) => ({
        router: state.location
    })
)(BreedPageComponent);