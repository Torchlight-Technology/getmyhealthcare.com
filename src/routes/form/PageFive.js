import { h } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';

const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

const PageFive = props => (
	<div className="page form">
		<div class="form-title">
		  <h2>Just need to confirm contact details for your quote estimates</h2>
		  <p>Complete this paege and we’ll match you with available plans and show you estimated pricing including subsidies</p>
		</div>
		<label htmlFor="firstName" name="firstName">First Name</label>
		<Field name="firstName" placeholder="First Name" type="text" />
		<ErrorMessage
		  name="firstName"
		  component="div"
		  className="field-error"
		/>

		<label htmlFor="lastName" name="lastName">Last Name</label>
		<Field name="lastName" placeholder="Last Name" type="text" />
		<ErrorMessage 
		  name="lastName"
		  component="div"
		  className="field-error"
		/>

		<label htmlFor="streetAddress" name="streetAddress">Street Address</label>
		<Field name="streetAddress" placeholder="123 Main St" type="text" />
		<ErrorMessage 
		  name="streetAddress" 
		  component="div" 
		  className="field-error"
		/>

		<label htmlFor="email" name="email">Email</label>
		<Field name="email" placeholder="email@address.com" type="email" />
		<ErrorMessage 
		  name="email" 
		  component="div" 
		  className="field-error"
		/>

		<label htmlFor="phone" name="phone">Phone</label>
		<Field
              name="phone"
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={phoneNumberMask}
                  placeholder="Enter your phone number"
                  type="phone"
                />
              )}
            />
		<ErrorMessage 
		  name="phone" 
		  component="div" 
		  className="field-error"
		/>
		<button
			type="submit"
			disabled={!(props.values.firstName && props.values.lastName && props.values.streetAddress && props.values.email && props.values.phone)}
		>
			Submit
		</button>
	</div>
);

export default PageFive
