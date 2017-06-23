import * as React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export interface Props {

}

export interface State {

}

export class UIReactBootstrapTable extends React.Component<Props, State> {
	state: State = {
		inputText: ''
	};

	static defaultProps = {

	};

	private getHeader(): JSX.Element[] {
		let data: any[] = [
			'id',
			'name',
			'price'
		];

		return data.map((item, index) => {
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
	}

	public render() {
		let products = [{
			id: 1,
			name: "Item name 1",
			price: 100
		}, {
			id: 2,
			name: "Item name 2",
			price: 100
		}];

		return (
			<div className="ui-simple">
				<div className="component-name">
					React-Bootstrap-table
				</div>

				<div>
					<BootstrapTable data={products} striped={true} hover={true}>
						{this.getHeader()}
					</BootstrapTable>
				</div>
			</div>
		);
	}
}