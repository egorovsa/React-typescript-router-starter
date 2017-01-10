import * as React from 'react';

export interface Props {

}

export interface State {

}

export class AboutPageComponent extends React.Component<Props, State> {
    state: State = {};

    //static defaultProps: Props = {} as Props;

    public render() {
        return (
            <div>
                <div className="component-name">
                    AboutPageComponent
                </div>

                <p>About page</p>
            </div>
        );
    }
}