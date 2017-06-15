import * as React from 'react';

export interface Props {
	text: string,
	test?: string
}

export interface State {

}

export class ChildrenComponent extends React.Component<Props, State> {
	state: State = {};

	static defaultProps = {};

	public render() {
		return (
			<div className="ui-simple">
				<div className="component-name">
					ChildrenComponent {this.props.text} {this.props.test}
				</div>
			</div>
		);
	}
}