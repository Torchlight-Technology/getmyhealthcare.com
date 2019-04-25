import { h } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';

const dobMask = [
  /[1-9]/,
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
            />
          )}
        />
		<ErrorMessage
		  name="dateOfBirth"
		  component="div"
		  className="field-error"
		/>
		<label htmlFor="gender" name="gender">Gender</label>
		<Field htmlFor="gender" placholder="Gender" component="select" name="gender">
		  <option value="Male" name="gender">Male</option>
		  <option value="Female" name="gender">Female</option>
		</Field>
		<ErrorMessage
		  name="gender"
		  component="div"
		  className="field-error"
		/>
		<label htmlFor="tobacco" name="tobacco">Tobacco user?</label>
		<Field htmlFor="tobacco" placholder="Tobacco user?" component="select" name="tobacco">
		  <option value="Yes" name="tobacco">Yes</option>
		  <option value="No" name="tobacco">No</option>
		</Field>
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
