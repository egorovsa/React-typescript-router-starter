import * as React from 'react';

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
	searchRequest: SearchRequest
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
		}
	};

	static defaultProps = {

	};

	private onInputChangeHandler(field: any, e) {
		let searchRequest: SearchRequest = Object.assign({}, this.state.searchRequest);

		searchRequest[field] = e.target.value;

		this.setState({
			searchRequest: searchRequest
		} as State);
	}

	public render() {
		console.log(this.state);

		return (
			<div className="ui-simple">
				<div className="SearchRequestComponent">
					SearchRequest
				</div>

				<div>
					<input placeholder="SbUserId" onChange={this.onInputChangeHandler.bind(this, 'SbUserId')}/>
					<input placeholder="UserName" onChange={this.onInputChangeHandler.bind(this, 'UserName')}/>
				</div>
			</div>
		);
	}
}