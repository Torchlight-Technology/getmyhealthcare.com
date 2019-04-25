import { h } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const PageThree = props => (
	<div className="page form">
		<div class="form-title">
		  <h2>What type of coverage are you looking for?</h2>
		  <p>We’ve pre-selected the silver plans since they’re the most popular plan level</p>
		</div>
		<label htmlFor="coverageType" name="coverageType">Coverage type</label>
		<Field htmlFor="coverageType" placholder="Coverage type" component="select" name="coverageType">
			<option value="">Select</option>
		  <option value="Bronze" name="coverageType">Bronze</option>
		  <option value="Silver" name="coverageType">Silver</option>
		  <option value="Gold" name="coverageType">Gold</option>
		  <option value="Platinum" name="coverageType">Platinum</option>
		</Field>
		<ErrorMessage
		  name="coverageType"
		  component="div"
		  className="field-error"
		/>
		<button
			type="button"
			onClick={props.navigateNext}
			disabled={!(props.values.coverageType)}
		>
			Next
		</button>
	</div>
);

export default PageThree;
