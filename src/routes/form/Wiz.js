import React, { Component } from 'react';

class Wiz extends Component {
	state = {
		pageIndex: 0
	};

	// componentDidMount () {
	// 	console.log(this.props.testVal)
	// }

	render() {
		const renderProps = {
			navigateBack: this._navigateBack,
			navigateNext: this._navigateNext,
			pageIndex: this.state.pageIndex,
			handleLocalStorage: this._handleLocalStorage,
			renderPage: this._renderPage,
			navigateNextSetClientData: this._navigateNextSetClientData
		};
		return this.props.children(renderProps);
	}

	_navigateBack = () => {
		this.setState(prevState => ({
			pageIndex: prevState.pageIndex - 1 < 0 ? 0 : prevState.pageIndex - 1
		}),()=> console.log(this.state.pageIndex));
	};

	_navigateNext = () => {
		this.setState(prevState => ({
			pageIndex: prevState.pageIndex + 1
		}));
	};

	_handleLocalStorage = (e) => {
			const tempStorage = JSON.parse(sessionStorage.getItem('getmyhealth'))
      tempStorage[e.target.name] = e.target.value
      sessionStorage.setItem('getmyhealth', JSON.stringify(tempStorage))
	}

	// getStateAndCity = async (zip) => {
	// 	let response =  fetch(`https://api.zippopotam.us/us/${zip}`, {
	// 		method: 'GET'
	// 	})
	// 	.then((res) => res.json())
	// 	.then((data) => (data.places[0]));

	// 	let data = await response;
	// 	console.log(data)
	// 	return {
	// 		home_city: data['place name'],
	// 		home_state: data['state']
	// 	}
	// }

// 	_navigateNextSetClientData= async (e) => {
// 		console.log(e)
// 		const tempStorage = JSON.parse(sessionStorage.getItem('getmyhealth'))
// 		const stateAndCity =  await this.getStateAndCity(tempStorage['home_zip'])
// 		tempStorage['home_city'] = stateAndCity.home_city;
// 		tempStorage['home_state'] = stateAndCity.home_state;
// 		sessionStorage.setItem('getmyhealth', JSON.stringify(tempStorage))
// 		console.log('testing')
// 		this._navigateNext()
// }

	_renderPage = formProps => {
		const { pageIndex } = this.state;

		const Page = this.props.pages[pageIndex];

		return (
			<Page
				{...formProps}
				handleLocalStorage={this._handleLocalStorage}
				// navigateNextSetClientData={this._navigateNextSetClientData}
				navigateBack={this._navigateBack}
				navigateNext={this._navigateNext}
				pageIndex={pageIndex}
			/>
		);
	};
}

export default Wiz;
