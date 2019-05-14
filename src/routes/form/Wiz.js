import React, { Component } from 'react';

class Wiz extends Component {
	state = {
		pageIndex: 0,
		home: true
	};

	componentDidMount() {
		const uri = this.props.props.url.substring(2);
		const scrollNavItems = ['how-it-works', 'tips'];

		if (scrollNavItems.includes(uri)) {
			setTimeout(() => document.getElementById(uri).scrollIntoView({ behavior: 'smooth' }), 250);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.props.url !== this.props.props.url || (!prevState.home && prevState.pageIndex === this.state.pageIndex)) {

			const uri = this.props.props.url.substring(2);
			const scrollNavItems = ['how-it-works', 'tips'];

			if (!uri) {
				this.setState({
					pageIndex: 0,
					home: true
				})
			}

			if (scrollNavItems.includes(uri)) {
				this.setState({
					pageIndex: 0,
					home: true
				}, () => setTimeout(() => document.getElementById(uri).scrollIntoView({ behavior: 'smooth' }), 250))
			}
		}
	}

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
			pageIndex: prevState.pageIndex - 1 < 0 ? 0 : prevState.pageIndex - 1,
			home: prevState.pageIndex - 1 === 0 ? true : false
		}));
	};

	_navigateNext = () => {
		this.setState(prevState => ({
			pageIndex: prevState.pageIndex + 1,
			home: false
		}));
	};

	_handleLocalStorage = (e) => {
		const tempStorage = JSON.parse(sessionStorage.getItem('getmyhealth'))
		tempStorage[e.target.name] = e.target.value
		sessionStorage.setItem('getmyhealth', JSON.stringify(tempStorage))
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
