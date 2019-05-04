import { h } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RadioButton from '../../components/radio-button';
import RadioButtonGroup from '../../components/radio-button-group';
import Progress from 'preact-progress';

const onChange = (ctx, val) => console.log(`${val}% complete`);

const PageThree = props => (
	<div className="page form">
    <div class="form-window">
    <Progress 
      id="loader" class="loader"
      value={60} height="3px" color="#6cc644"
      onChange={onChange}
    / >
      <div class="sidebar">
        <img src="assets/agent-photo.png" />
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
      </div>
        <div class="input-wrap">
          <div class="form-title">
            <h2>Check for discounts!</h2>
            <p>You may qualify for savings on your monthly based on your estimated household income.</p>
          </div>
          <RadioButtonGroup
             id="coverageType"
             label="One of these please"
             value={props.values.coverageType}
             error={props.errors.coverageType}
          >
          <div class="radio-tile bronze">
          	<div class="radio-container">
  	           <Field
  	             component={RadioButton}
  	             name="coverageType"
  	             id="Bronze"
                 label="Bronze"
                 onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } }
  	           />
  	        </div>	
  	    	<h4 class="plan-level">Bronze Plans</h4>
  	    	<p class="price">Starting at $XXX/mo</p>
  	    	<p class="details">Bronze plans cover more than 60% of medical costs</p>
      	</div>

      	<div class="radio-tile silver">
      		<div class="radio-container">
             <Field
               component={RadioButton}
               name="coverageType"
               id="Silver"
               label="Silver"
               onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } }
             />
             </div>	
  	    	<h4 class="plan-level">Silver Plans</h4>
  	    	<p class="price">Starting at $XXX/mo</p>
  	    	<p class="details">Silver plans cover more than 60% of medical costs</p>
      	</div>

      	<div class="radio-tile gold">
      		<div class="radio-container">
             <Field
               component={RadioButton}
               name="coverageType"
               id="Gold"
               label="Gold"
               onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } }
             />
              </div>	
  	    	<h4 class="plan-level">Gold Plans</h4>
  	    	<p class="price">Starting at $XXX/mo</p>
  	    	<p class="details">Gold plans cover more than 60% of medical costs</p>
      	</div>

      	<div class="radio-tile platinum">
      		<div class="radio-container">
             <Field
               component={RadioButton}
               name="coverageType"
               id="Platinum"
               label="Platinum"
               onChange={(e) => { props.handleLocalStorage(e); props.handleChange(e) } }
             />
             </div>
             <h4 class="plan-level">Platinum Plans</h4>
  	    	<p class="price">Starting at $XXX/mo</p>
  	    	<p class="details">Platinum plans cover more than 60% of medical costs</p>
      	</div>
      	<ErrorMessage
      	  name="coverageType"
      	  component="div"
      	  class="field-error"
      	/>
           </RadioButtonGroup>
  		
  		<button
  			type="button"
  			onClick={props.navigateNext}
  			disabled={!(props.values.coverageType)}
  		>
  			Next
  		</button>
      </div>
    </div>
	</div>
);

export default PageThree;
