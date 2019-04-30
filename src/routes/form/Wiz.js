import React, { Component } from 'react';

class Wiz extends Component {
	state = {
		pageIndex: 0
	};
	
	render() {
		const renderProps = {
			navigateBack: this._navigateBack,
			navigateNext: this._navigateNext,
			pageIndex: this.state.pageIndex,
			handleLocalStorage: this._handleLocalStorage,
			renderPage: this._renderPage
		};
		return this.props.children(renderProps);
	}

	_navigateBack = () => {
		this.setState(prevState => ({
			pageIndex: prevState.pageIndex - 1 < 0 ? prevState.pageIndex - 1 : 0
		}));
	};

	_navigateNext = () => {
		this.setState(prevState => ({
			pageIndex: prevState.pageIndex + 1
		}));
	};

	_handleLocalStorage = (e) => {
			const tempStorage = JSON.parse(localStorage.getItem('getmyhealth'))
      tempStorage[e.target.name] = e.target.value
      localStorage.setItem('getmyhealth', JSON.stringify(tempStorage))
	}

	_renderPage = formProps => {
		const { pageIndex } = this.state;

		const Page = this.props.pages[pageIndex];

		return (
			<Page
				{...formProps}
				handleLocalStorage={this._handleLocalStorage}
				navigateBack={this._navigateBack}
				navigateNext={this._navigateNext}
				pageIndex={pageIndex}
			/>
		);
	};
}

export default Wiz;
