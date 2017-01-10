/**
 * Created by sregej on 07.01.17.
 */
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {RouterComponent} from "./routes";

window.onload = () => {
    ReactDom.render(
        React.createElement(RouterComponent),
        document.getElementById('app')
    );
}