import * as React from 'react';
import {NavComponent} from './nav-component';

export interface Props {
    title?: string
}

export interface State {

}

export class HeaderComponent extends React.Component<Props, State> {
    state: State = {};

    static defaultProps: Props = {
        title: 'Default title'
    } as Props;

    public render() {
        return (
            <header>
                <div className="component-name">
                    HeaderComponent
                </div>

                <h3>It is: <b>{this.props.title}</b></h3>

                <NavComponent/>
            </header>
        );
    }
}