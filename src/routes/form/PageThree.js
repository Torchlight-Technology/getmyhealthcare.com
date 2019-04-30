import { h } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PageThree = props => (
	<div className="page form">
		<div class="form-title">
		  <h2>Check for discounts!</h2>
		  <p>You may qualify for savings on your monthly based on your estimated household income.</p>
		</div>
		<label htmlFor="income" name="income">Annual Income</label>
		<Field htmlFor="income" placholder="Annual Income" name="income" onInput={(e) => { props.handleLocalStorage(e) }} />
		<ErrorMessage
		  name="income"
		  component="div"
		  className="field-error"
		/>
		<button
			type="button"
			onClick={props.navigateNext}
			disabled={!(props.values.income)}
		>
			Next
		</button>
	</div>
);

export default PageThree;
