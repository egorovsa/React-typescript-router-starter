import * as React from 'react';
import {UISimpleComponent} from "../ui/simple-ui-component";

export interface Props {

}

export interface State {
    text: string
}

export class AboutPageComponent extends React.Component<Props, State> {
    state: State = {
        text: 'default text'
    };

    //static defaultProps: Props = {} as Props;

    private showTextFromSimpleComponent(textFromSimpleComponent: string) {
        this.setState({
            text: textFromSimpleComponent
        } as State)
    }

    public render() {
        return (
            <div>
                <div className="component-name">
                    AboutPageComponent
                </div>

                <p>About page: {this.state.text}</p>

                <UISimpleComponent
                    onClickButton={this.showTextFromSimpleComponent.bind(this)}
                    updateFromInput={true}
                />
            </div>
        );
    }
}