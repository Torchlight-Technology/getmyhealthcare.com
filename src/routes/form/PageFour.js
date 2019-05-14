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

const PageThree = props => (
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
          <option value="no" name="life_event">No qualifying life events</option>
          <option value="lose60" name="life_event">Will lose coverage in 60 days</option>
          <option value="lost" name="life_event">Lost health insurance coverage</option>
          <option value="marital" name="life_event">Got married or divorced</option>
          <option value="child" name="life_event">Had a child/adopted child</option>
          <option value="death" name="life_event">Had a death in immediate family</option>
          <option value="move" name="life_event">Moved to a new state</option>
          <option value="job" name="life_event">Lost or started a new job</option>
        </Field>
        <ErrorMessage
          name="life_event"
          component="div"
          className="field-error"
        />

        <label htmlFor="existing_conditions" name="existing_conditions">Do you have an existing condition?</label>
        <Field htmlFor="existing_conditions" placholder="Existing Condition" component="select" name="existing_conditions" onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } }>
           <option value="none" name="existing_conditions">None</option>
           <option value="aids_hiv" name="existing_conditions">AIDS/HIV</option>
           <option value="asthma" name="existing_conditions">Asthma</option>
           <option value="cholesterol" name="existing_conditions">Cholesterol</option>
           <option value="depression" name="existing_conditions">Depression</option>
           <option value="diabetes" name="existing_conditions">Diabetes</option>
           <option value="liver_disease" name="existing_conditions">Liver Disease</option>
           <option value="alzheimers_disease" name="existing_conditions">Alzheimer's Disease</option>
           <option value="lung_disease" name="existing_conditions">Lung Disease</option>
           <option value="drug_abuse" name="existing_conditions">Drug Abuse</option>
           <option value="mental_illness" name="existing_conditions">Mental Illness</option>
           <option value="cancer" name="existing_conditions">Cancer</option>
           <option value="heart_disease" name="existing_conditions">Heart Disease</option>
           <option value="high_blood_pressure" name="existing_conditions">High Blood Pressure</option>
           <option value="pulmonary_disease" name="existing_conditions">Pulmonary Disease</option>
           <option value="stroke" name="existing_conditions">Stroke</option>
           <option value="kidney_disease" name="existing_conditions">Kidney Disease</option>
           <option value="ulcer" name="existing_conditions">Ulcer</option>
           <option value="vascular_disease" name="existing_conditions">Vascular Disease</option>
        </Field>
        <ErrorMessage
          name="existing_conditions"
          component="div"
          className="field-error"
        />
        <button
          type="button"
          onClick={props.navigateNext}
          disabled=
          {!(props.values.life_event && props.values.existing_conditions)}
        >
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

export default PageThree;
