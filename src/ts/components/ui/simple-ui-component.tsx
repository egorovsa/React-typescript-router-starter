import * as React from 'react';

export interface Props {
    onClickButton: (inputValue: string) => void,
    defaultInputValue?: string,
    updateFromInput?: boolean
}

export interface State {
    inputText: string
}

export class UISimpleComponent extends React.Component<Props, State> {
    state: State = {
        inputText: ''
    };

    static defaultProps = {
        defaultInputValue: '',
        updateFromInput: false
    };

    private onInputChangeHandler(e) {
        this.setState({
            inputText: e.target.value
        } as State);

        if (this.props.updateFromInput) {
            this.props.onClickButton(this.state.inputText);
        }
    }

    private onButtonClickHandler() {
        this.props.onClickButton(this.state.inputText);
    }

    private getSendButton() {
        if (!this.props.updateFromInput) {
            return (
                <button onClick={this.onButtonClickHandler.bind(this)}>Send input value</button>
            );
        }
    }

    public render() {
        return (
            <div className="ui-simple">
                <div className="component-name">
                    UISimpleComponent
                </div>

                <div>
                    <input placeholder="text here..." onChange={this.onInputChangeHandler.bind(this)}/>
                    {this.getSendButton()}
                </div>
            </div>
        );
    }
}