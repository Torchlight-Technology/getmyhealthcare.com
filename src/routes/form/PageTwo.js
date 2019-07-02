import { h } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import { Router, route } from 'preact-router';
import Progress from 'preact-progress';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy', {"minYear": "1920", "maxYear": "2000"});

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

const onChange = (ctx, val) => console.log(``);

const checkForErrors = (errors) => !errors.hasOwnProperty('dateOfBirth');

const PageTwo = props => (
	<div className="page form">
		<div class="form-window">
			<Progress 
			  id="loader" class="loader"
			  value={20} height="3px" color="#6cc644"
			  onChange={onChange}
			/>
			<div class="sidebar">
				<img src="assets/agent-photo.png" />
				<p>"Hi I'm Joy! Please tell me a little about yourself so I can better help you."</p>
			</div>
			
			<div class="input-wrap">
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
							pipe={autoCorrectedDatePipe}
							guide={false}
							onChange={(e)=>{
								props.handleChange(e);
								props.handleLocalStorage(e);
							}}
						/>
					)}
				/>
				<ErrorMessage
				  name="dateOfBirth"
				  component="div"
				  className="field-error"
				/>
				<label htmlFor="gender" name="gender">Gender</label>
				<Field htmlFor="gender" placholder="Gender" component="select" name="gender" onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } }>
				  <option value="">Select</option>
				  <option value="M" name="gender">Male</option>
				  <option value="F" name="gender">Female</option>
				   <option value="N" name="gender">Non-binary</option>
				</Field>
				<ErrorMessage
				  name="gender"
				  component="div"
				  className="field-error"
				/>
				<button type="button" onClick={props.navigateNext} disabled={!(checkForErrors(props.errors) && props.values.gender && props.values.dateOfBirth)}>Next</button>
				<button
					class="back-button"
					type="button"
					onClick={props.navigateBack}
				>
					Back
				</button>
			</div>
		</div>
	</div>
);

export default PageTwo;
