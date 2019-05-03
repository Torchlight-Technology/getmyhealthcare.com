import { h } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Progress from 'preact-progress';

const onChange = (ctx, val) => console.log(`${val}% complete`);

const PageThree = props => (
	<div className="page form">
		<div class="form-window">
			<Progress 
			  id="loader" class="loader"
			  value={40} height="3px" color="#6cc644"
			  onChange={onChange}
			/>
			<div class="sidebar">
				<img src="assets/agent-photo.png" />
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
			</div>
	    	<div class="input-wrap">
				<div class="form-title">
				  <h2>Check for discounts!</h2>
				  <p>You may qualify for savings on your monthly based on your estimated household income.</p>
				</div>
				<label htmlFor="income" name="income">Annual Income</label>
				<Field htmlFor="income" placholder="Annual Income" component="select" name="income" onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } }>
				  <option value="">Select</option>
				  <option value="less-than-25000" name="income">Less than $25,000</option>
				  <option value="25000-34999" name="income">$25,000 to $34,999</option>
				  <option value="35000-49999" name="income">$35,000 to $49,999</option>
				  <option value="50000-74999" name="income">$50,000 to $74,999</option>
				  <option value="75000-99999" name="income">$75,000 to $99,999</option>
				  <option value="100000-149999" name="income">$100,000 to $149,999</option>
				  <option value="150000-199999" name="income">$150,000 to $199,999</option>
				  <option value="more-than-200000" name="income">$200,000 or mor</option>
				</Field>
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
		</div>
	</div>
);

export default PageThree;
