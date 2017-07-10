import * as React from 'react';
import * as ReactDom from 'react-dom';
import {RouterComponent} from "./routes";
import '../styl/style.styl';

window.onload = () => {
    ReactDom.render(
        React.createElement(RouterComponent),
        document.getElementById('app')
    );
};