import { h } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Progress from 'preact-progress';

const onChange = (ctx, val) => console.log(`${val}% complete`);

const checkForErrors = (obj) => {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

const PageFour = props => (
	<div className="page form">
    <div class="form-window">
      <Progress
        id="loader" class="loader"
        value={60} height="3px" color="#6cc644"
        onChange={onChange}
      />
      <div class="sidebar">
        <img src="assets/agent-photo.png" />
        <p>"Thank you! Let's look over your coverage options"</p>
      </div>
        <div class="input-wrap">
          <div class="form-title">
            <h2>Select your plan!</h2>
            <p>What level of coverage do you need? Depending on how much you need, you can save more.</p>
          </div>
        <label htmlFor="life_event" name="life_event">Have you had any recent life events?</label>
        <Field htmlFor="life_event" placholder="Life Event" component="select" name="life_event" onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } }>
          <option value="no">No qualifying life events</option>
          <option value="lose60">Will lose coverage in 60 days</option>
          <option value="lost">Lost health insurance coverage</option>
          <option value="marital">Got married or divorced</option>
          <option value="child">Had a child/adopted child</option>
          <option value="death">Had a death in immediate family</option>
          <option value="move">Moved to a new state</option>
          <option value="job">Lost or started a new job</option>
        </Field>
        <ErrorMessage
          name="life_event"
          component="div"
          className="field-error"
        />
        <label htmlFor="existing_conditions" name="existing_conditions">Do You Have a Pre-Existing Condition?</label>
        <Field htmlFor="existing_conditions" placholder="Existing Condition" component="select" name="existing_conditions" onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } }>
          <option value="none">None</option>
          <option value="aids_hiv">AIDS/HIV</option>
          <option value="asthma">Asthma</option>
          <option value="cholesterol">Cholesterol</option>
          <option value="depression">Depression</option>
          <option value="diabetes">Diabetes</option>
          <option value="liver_disease">Liver Disease</option>
          <option value="alzheimers_disease">Alzheimer's Disease</option>
          <option value="lung_disease">Lung Disease</option>
          <option value="drug_abuse">Drug Abuse</option>
          <option value="mental_illness">Mental Illness</option>
          <option value="cancer">Cancer</option>
          <option value="heart_disease">Heart Disease</option>
          <option value="high_blood_pressure">High Blood Pressure</option>
          <option value="pulmonary_disease">Pulmonary Disease</option>
          <option value="stroke">Stroke</option>
          <option value="kidney_disease">Kidney Disease</option>
          <option value="ulcer">Ulcer</option>
          <option value="vascular_disease">Vascular Disease</option>
        </Field>
        <ErrorMessage
          name="existing_conditions"
          component="div"
          className="field-error"
        />
        <label htmlFor="tobacco" name="tobacco">Tobacco user?</label>
        <Field htmlFor="tobacco" component="select" name="tobacco" onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } } >
          <option value="0" name="tobacco">No</option>
          <option value="1" name="tobacco">Yes</option>
        </Field>
        <ErrorMessage
          name="tobacco"
          component="div"
          className="field-error"
        />
        <button
          type="button"
          onClick={props.navigateNext}
          disabled={!(props.values.life_event && props.values.existing_conditions && props.values.tobacco)}>
       
          Next
        </button>
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

export default PageFour;
