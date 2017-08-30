import * as React from 'react';
import {UISimpleComponent} from "../ui/simple-ui-component";
import {SearchRequestComponent} from "../ui/search-requset-component";
import {ParentComponent} from "../ui/parent-children/parent-component";
import {ChildrenComponent} from "../ui/parent-children/children-component";
import {UIReactBootstrapTable} from "../ui/react-table-component";
import * as DatePicker from "react-bootstrap-date-picker";


export interface Props {
}

export interface State {
	text: string,
	time:any
}

export class MainPageComponent extends React.Component<Props, State> {
	state: State = {
		text: '',
		time: ''
	};

	//static defaultProps: Props = {} as Props;

	private showTextFromSimpleComponent(textFromSimpleComponent: string) {
		this.setState({
			text: textFromSimpleComponent
		} as State)
	}

	private handleChange = (value, formattedValue):void =>{
		this.setState({
			time: value // ISO String, ex: "2016-11-19T12:00:00.000Z"
		} as State);
	};

	public render() {
		return (
			<div>
				<DatePicker value={this.state.time} onChange={this.handleChange} />


				<div className="component-name">
					MainPageComponent
				</div>

				<p>
					Main page: {this.state.text}
				</p>

				<UIReactBootstrapTable/>

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