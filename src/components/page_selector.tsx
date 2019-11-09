import React from 'react';
import {RouterState} from "../router";
import {connect} from "react-redux";
import {RootState} from "../store/reducer";
import {COMPONENTS_MAP} from "../router/routes_map";

type InnerProps = {
    router: RouterState
}

const PageSelectorComponent = (props: InnerProps) => {
    const SelectedPageComponent = COMPONENTS_MAP[props.router.type];
    return <SelectedPageComponent />
}

export const PageSelector = connect(
    (state: RootState) => ({
        router: state.location
    })
)(PageSelectorComponent);
