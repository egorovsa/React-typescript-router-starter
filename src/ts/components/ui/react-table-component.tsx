import * as React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export interface Props {

}

export interface State {
	data: any[],
	playersModel: any[]

}

export class UIReactBootstrapTable extends React.Component<Props, State> {
	state: State = {
		data: [],
		playersModel: []
	};

	static defaultProps = {};

	componentDidMount() {
		let products = [{
			id: 1,
			name: "Item name 1",
			price: 100
		}, {
			id: 2,
			name: "Item name 2",
			price: 100
		}];

		let playersModel: any[] = [
			'id',
			'name',
			'price'
		];

		this.setState({
			data: products,
			playersModel: playersModel
		})
	}

	private getTableHeaders() {
		if (this.state.playersModel.length > 0) {
			let headers = this.state.playersModel.map((item, index) => {
				return (
					<TableHeaderColumn
						dataField={item}
						isKey={index === 0 ? true : false}
						key={index}
					>
						{item}
					</TableHeaderColumn>
				)
			});

			return (
				<BootstrapTable data={this.state.data} striped={true} hover={true}>
					{headers}
				</BootstrapTable>
			)
		}
	}

	public render() {
		return (
			<div className="ui-simple">
				<div className="component-name">
					React-Bootstrap-table
				</div>

				<div>
					{this.getTableHeaders()}
				</div>
			</div>
		);
	}
}