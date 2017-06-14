import * as React from 'react';
import {EventHandler} from "react";
import {CommonService} from "../../services/common";

export interface Props {

}

export interface SearchRequest {
	SbUserId: string,
	UserName: string,
	Mobile: string,
	FirstName: string,
	Age: number,
	Currency: string,
	Balance: number,
	PromoBalance: number,
	LockedFunds: number,
	FTDs: number,
}

export interface State {
	searchRequest: SearchRequest,
	secondRequest: SearchRequest,
}

export class SearchRequestComponent extends React.Component<Props, State> {
	state: State = {
		searchRequest: {
			SbUserId: '',
			UserName: '',
			Mobile: '',
			FirstName: '',
			Age: 0,
			Currency: '',
			Balance: 0,
			PromoBalance: 0,
			LockedFunds: 0,
			FTDs: 0,
		},
		secondRequest: {
			SbUserId: '',
			UserName: '',
			Mobile: '',
			FirstName: '',
			Age: 0,
			Currency: '',
			Balance: 0,
			PromoBalance: 0,
			LockedFunds: 0,
			FTDs: 0,
		},
	};

	static defaultProps = {};

	private onInputChangeHandler(parent: string, field: string, e): void {
		let state: State = Object.assign({}, this.state);

		state[parent][field] = e.target.value;

		this.setState(state as State);
	}

	public render() {
		return (
			<div className="ui-simple">
				<div className="component-name">
					SearchRequestComponent

					{CommonService.doSomething('hello', 'Alex')}
				</div>

				<div>
					<input placeholder="SbUserId"
					       onChange={this.onInputChangeHandler.bind(this, 'searchRequest', 'SbUserId')}/>
					<input placeholder="UserName"
					       onChange={this.onInputChangeHandler.bind(this, 'secondRequest', 'UserName')}/>
				</div>
			</div>
		);
	}
}