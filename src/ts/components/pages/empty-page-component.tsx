import * as React from 'react';

export interface Props {

}

export interface State {

}

export class EmptyPageComponent extends React.Component<Props, State> {
    state: State = {

    };

    //static defaultProps: Props = {} as Props;

    public render() {
        console.log(this.props);
        return (
            <div>
                <div className="component-name">
                    EmptyPageComponent
                </div>

                404 - It is empty page component
            </div>
        );
    }
}