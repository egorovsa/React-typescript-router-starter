import * as React from 'react';
import {ReactElement} from "react";

export interface Props {

}

export interface State {

}

export class ParentComponent extends React.Component<Props, State> {
	state: State = {};

	static defaultProps = {};

	private getChildrens() {
		return React.Children.map(this.props.children, (child) => React.cloneElement(child as ReactElement<any>, {test: 'lala'}));
	}

	public render() {
		return (
			<div className="ui-simple">
				<div className="component-name">
					ParentComponent
				</div>

				<div>
					{this.getChildrens()}
				</div>
			</div>
		);
	}
}