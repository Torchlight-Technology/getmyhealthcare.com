// Helper styles for demo
import { MoreResources, DisplayFormikState } from './helper';

import { h } from 'preact';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Wizard from './Wizard';

const App = (props) => (
	<div className="app">
		<Wizard {...props} />
	</div>
);

export default App;
