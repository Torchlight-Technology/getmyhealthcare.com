import { h } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';

const dobMask = [
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

const PageTwo = props => (
	<div className="page form">
		<div class="form-title">
		  <h2>Who is being insured?</h2>
		  <p>Please include details so we can match you with your best plan</p>
		</div>
		<label htmlFor="dateOfBirth" name="dateOfBirth">Date of Birth</label>
		<Field
					name="dateOfBirth"
          render={({ field }) => (
            <MaskedInput
              {...field}
              mask={dobMask}
              placeholder="MM/DD/YYYY"
							type="dateofBirth"
							onInput={(e) => { props.handleLocalStorage(e) }}
            />
          )}
        />
		<ErrorMessage
		  name="dateOfBirth"
		  component="div"
		  className="field-error"
		/>
		<label htmlFor="gender" name="gender">Gender</label>
		<select htmlFor="gender" placholder="Gender" value={props.values.gender} name="gender" onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } }>
		  <option value="">Select</option>
		  <option value="M" name="gender">Male</option>
		  <option value="F" name="gender">Female</option>
		</select>
		<ErrorMessage
		  name="gender"
		  component="div"
		  className="field-error"
		/>
		<label htmlFor="tobacco" name="tobacco">Tobacco user?</label>
		<select htmlFor="tobacco" placholder="Tobacco user?" value={props.values.tobacco} name="tobacco" onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } }>
			<option value="">Select</option>
		  <option value="1" name="tobacco">Yes</option>
		  <option value="0" name="tobacco">No</option>
		</select>
		<ErrorMessage
		  name="tobacco"
		  component="div"
		  className="field-error"
		/>
		<button
			type="button"
			onClick={props.navigateNext}
			disabled={!(props.values.dateOfBirth && props.values.gender && props.values.tobacco)}
		>
			Next
		</button>
	</div>
);

export default PageTwo;
