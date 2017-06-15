import * as React from 'react';
import {UISimpleComponent} from "../ui/simple-ui-component";
import {SearchRequestComponent} from "../ui/search-requset-component";
import {ParentComponent} from "../ui/parent-children/parent-component";
import {ChildrenComponent} from "../ui/parent-children/children-component";

export interface Props {
}

export interface State {
	text: string
}

export class MainPageComponent extends React.Component<Props, State> {
	state: State = {
		text: ''
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
					MainPageComponent
				</div>

				<p>
					Main page: {this.state.text}
				</p>

				<UISimpleComponent onClickButton={this.showTextFromSimpleComponent.bind(this)}/>
				<SearchRequestComponent/>


				<ParentComponent>
					<ChildrenComponent text="1"/>
					<ChildrenComponent text="2"/>
					<ChildrenComponent text="3"/>
				</ParentComponent>

			</div>
		);
	}
}