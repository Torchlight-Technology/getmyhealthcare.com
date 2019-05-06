/* eslint-disable no-mixed-spaces-and-tabs */
import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Helmet from 'preact-helmet';
import Header from './header';
import Footer from './footer';

// Code-splitting is automated for routes
import Form from '../routes/form';
import Exit from '../routes/exit';
import About from '../routes/about';
import Privacy from '../routes/privacy';
import Terms from '../routes/terms';
import PageOne from '../routes/form/PageOne.js';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	searchToObject = search => {
		// window check is necessary for production build step
		if (typeof window !== 'undefined') {

			return search.substring(1).split('&').reduce((result, value) => {
				const parts = value.split('=');
				if (parts[0]) result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
				return result;
			}, {});
		}
	};

	constructor(props) {
		super(props);
		this.params = this.searchToObject(location.search);
	}
	
	render() {
		return (

			<div id="app">
				<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5WZH76" height="0" width="0" style="display:none;visibility:hidden" />
				<Helmet
					link={[
				 			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inconsolata:400,700' },
				 			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
				 		]}
					script={[
	                    { src: '', type: 'text/javascript' },
	                    { type: 'javascript', innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-T5WZH76');`
						}
	                ]}
				/>
				<Header />
				<Router onChange={this.handleRoute} params={this.params}>
					<Form path="/" />
					<PageOne path="/form/" />
					<Exit path="/thank-you/" />
					<About path="/about/" />
					<Privacy path="/privacy/" />
					<Terms path="/terms/" />
				</Router>
				<Footer />
			</div>
		);
	}
}
