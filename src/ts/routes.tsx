import * as React from 'react';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import {MainPageComponent} from "./components/pages/main-page-component";
import {AboutPageComponent} from "./components/pages/about-page-component";
import {MainLayoutComponentComponent} from "./components/layouts/main-layout";
import {SecondLayoutComponent} from "./components/layouts/second-layout";
import {EmptyPageComponent} from "./components/pages/empty-page-component";

const routes: Router.PlainRoute = [
    {
        path: '/',
        components: MainLayoutComponentComponent,
        indexRoute: {components: MainPageComponent},
        childRoutes: [
            {
                path: 'about',
                component: AboutPageComponent,
                childRoutes: [
                    {
                        path: 'inner',
                        component: MainPageComponent,
                    }
                ]
            }
        ],

    },
    {
        path: 'second',
        components: SecondLayoutComponent,
        indexRoute: {components: MainPageComponent},
        childRoutes: [
            {
                path: 'about',
                components: AboutPageComponent,
            }
        ]
    },
    {
        path: '*',
        components: EmptyPageComponent
    }

];

export class RouterComponent extends React.Component<any,any> {
    public render() {
        return (
            <Router history={browserHistory} routes={routes}></Router>
        );
    }
}
