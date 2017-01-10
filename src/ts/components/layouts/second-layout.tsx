import * as React from 'react';
import {HeaderComponent} from './../common/header-component';
import {FooterComponent} from './../common/footer-component';

export interface Props {

}

export interface State {

}

export class SecondLayoutComponent extends React.Component<Props, State> {
    state: State = {};

    //static defaultProps: Props = {} as Props;

    public render() {
        return (
            <div className="second-layout">
                <div className="component-name">
                    SecondLayoutComponent
                </div>

                <h1>It is: Second layout</h1>

                <HeaderComponent title="Header from Second layout"/>

                <div className=" second content">
                    {this.props.children}
                </div>

                <FooterComponent/>
            </div>
        );
    }
}