import React from 'react';
import {Provider} from "react-redux";
import {mStore} from "../../store";
import {PageSelector} from "../page_selector";

export const App = () =>
    <Provider store={mStore()}>
        <PageSelector />
    </Provider>;
