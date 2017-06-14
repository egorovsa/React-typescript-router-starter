import * as React from 'react';

export interface Props {

}

export interface State {

}

export class FooterComponent extends React.Component<Props, State> {
    state: State = {};

    //static defaultProps: Props = {} as Props;

    public render() {
        return (
            <footer>
                <div className="component-name">
                    FooterComponent
                </div>

                <p>React starter with Router</p>
            </footer>
        );
    }
}