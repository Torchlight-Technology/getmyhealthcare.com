import { h } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import Progress from 'preact-progress';

const onChange = (ctx, val) => console.log(`${val}% complete`);

const phoneNumberMask = [
  "(",
  /\d/,
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
const checkForErrors = (obj) => {
	for(var key in obj) {
			if(obj.hasOwnProperty(key))
					return false;
	}
	return true;
}
const PageFive = props => (
	<div className="page form">
		<div class="form-window">
			<Progress 
			  id="loader" class="loader"
			  value={80} height="3px" color="#6cc644"
			  onChange={onChange}
			/>
			<div class="sidebar">
				<img src="assets/agent-photo.png" />
				<p>"Let us know your details so we can send you your personalized quotes."</p>
			</div>
	    <div class="input-wrap">
				<div class="form-title">
					<h2>Just need to confirm contact details for your quote estimates</h2>
					<p>Complete this page and we’ll match you with available plans and show you estimated pricing including subsidies</p>
				</div>
				<label htmlFor="name_first" name="name_first">First Name</label>
				<Field name="name_first" placeholder="First Name" type="text" onChange={(e)=>{ props.handleChange(e); props.handleLocalStorage(e); }}/>
				<ErrorMessage
					name="name_first"
					component="div"
					className="field-error"
				/>

				<label htmlFor="name_last" name="name_last">Last Name</label>
				<Field name="name_last" placeholder="Last Name" type="text" onChange={(e)=>{ props.handleChange(e); props.handleLocalStorage(e); }}/>
				<ErrorMessage
					name="name_last"
					component="div"
					className="field-error"
				/>

				<label htmlFor="home_street" name="home_street">Street Address</label>
				<Field name="home_street" placeholder="123 Main St" type="text" onChange={(e)=>{ props.handleChange(e); props.handleLocalStorage(e); }}/>
				<ErrorMessage
					name="home_street"
					component="div"
					className="field-error"
				/>

				<label htmlFor="email" name="email">Email</label>
				<Field name="email" placeholder="email@address.com" type="email" onChange={(e)=>{ props.handleChange(e); props.handleLocalStorage(e); }}/>
				<ErrorMessage
					name="email"
					component="div"
					className="field-error"
				/>

				<label htmlFor="phone_home" name="phone_home">Phone</label>
				<Field
					name="phone_home"
					render={({ field }) => (
						<MaskedInput
							{...field}
							mask={phoneNumberMask}
							placeholder="Enter your phone number"
							type="phone"
							onChange={(e)=>{
								props.handleChange(e);
								props.handleLocalStorage(e);
							}}
						/>
					)}
				/>
				<ErrorMessage
					name="phone_home"
					component="div"
					className="field-error"
				/>
				<button
					type="button"
					onClick={props.navigateBack}
				>
					Back
				</button>
				<button
					type="submit"
					disabled={!(checkForErrors(props.errors) && props.values.name_first && props.values.name_last && props.values.home_street && props.values.email && props.values.phone_home)}
				>
				Submit
				</button>
			</div>
		</div>
	</div>
);

export default PageFive
