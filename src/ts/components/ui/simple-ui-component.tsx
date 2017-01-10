import * as React from 'react';

export interface Props {
    onClickButton: (inputValue: string) => void,
    defaultInputValue?: string
}

export interface State {
    inputText: string
}

export class UISimpleComponent extends React.Component<Props, State> {
    state: State = {
        inputText: ''
    };

    static defaultProps: Props = {
        defaultInputValue: ''
    } as Props;

    private onInputChangeHandler(e) {
        this.setState({
            inputText: e.target.value
        } as State);
    }

    private onButtonClickHandler() {
        this.props.onClickButton(this.state.inputText);
    }

    public render() {
        return (
            <div className="ui-simple">
                <div className="component-name">
                    UISimpleComponent
                </div>

                <div>
                    <input placeholder="text here..." onChange={this.onInputChangeHandler.bind(this)}/>
                    <button onClick={this.onButtonClickHandler.bind(this)}>Send input value</button>
                </div>
            </div>
        );
    }
}