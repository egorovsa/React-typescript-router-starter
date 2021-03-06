import * as React from 'react';
import {HeaderComponent} from '../common/header-component';
import {FooterComponent} from '../common/footer-component';
import {CommonService} from "../../services/common";

export interface Props {

}

export interface State {

}

export class MainLayoutComponent extends React.Component<Props, State> {
    state: State = {};

    //static defaultProps: Props = {} as Props;

    public render() {
        return (
            <div className="main-layout">
                <div className="component-name">
                    MainLayoutComponentComponent
                </div>

                <h1>It is: Main layout</h1>

                {CommonService.doSomething('Hello','Man')}

                <HeaderComponent title="Header from main Layout"/>

                <div className="content">
                    {this.props.children}
                </div>

                <FooterComponent/>
            </div>
        );
    }
}