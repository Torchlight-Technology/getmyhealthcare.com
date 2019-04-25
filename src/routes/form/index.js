// Helper styles for demo
import { MoreResources, DisplayFormikState } from './helper';

import { h } from 'preact';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Wizard from './Wizard';

const App = () => (
	<div className="app">
		<Wizard />
	</div>
);

export default App;
