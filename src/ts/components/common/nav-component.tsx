import * as React from 'react';
import {Link} from 'react-router';

export interface Props {

}

export interface State {

}

export class NavComponent extends React.Component<Props, State> {
    state: State = {};

    static defaultProps: Props = {} as Props;

    public render() {
        return (
            <nav>
                <div className="component-name">
                    NavComponent
                </div>
                <br/>

                <section>
                    <h3> Main - layout</h3>
                    <Link to="/">Main page</Link>
                    <Link to="/about">About</Link>
                </section>

                <section>
                    <h3>Second - layout</h3>
                    <Link to="/second">Second page</Link>
                    <Link to="/second/about">About1</Link>
                </section>
            </nav>
        );
    }
}