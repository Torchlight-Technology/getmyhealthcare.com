import { h } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
//import zipSubmit from '../../components/zip-submit';

const zipMask = [
  /[1-9]/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

// TODO Make ZipSubmit component (onClick send to top of page)
const PageOne = props => (
    <div className="page">
		<main>
		  <div class="mast">
		    <h2>Find the right health insurance for you in Philadelphia, PA.</h2>
		    <div class="mast-image"></div>
		    <h3>Get Started!</h3>
		    <div class="input-group">
	            <label htmlFor="numberOnPolicy" name="numberOnPolicy" >Number on Policy</label>
	            <Field htmlFor="numberOnPolicy" name="numberOnPolicy" component="select" placeholder="1">
	              <option value="">Select</option>
	              <option value="1">1</option>
	              <option value="2">2</option>
	              <option value="3">3</option>
	              <option value="4+">4+</option>
	            </Field>
	            <label htmlFor="home_zip" name="home_zip">Zip Code</label>
	          <Field
	                    name="home_zip"
	                    render={({ field }) => (
	                      <MaskedInput
	                        {...field}
	                        mask={zipMask}
	                        placeholder="ZIP Code"
	                        type="text"
	                      />
	                    )}
	                  />
	            <button
	              type="button"
	              onClick={props.navigateNext}
	              disabled={!(props.values.numberOnPolicy && props.values.home_zip)}
	            >
	              Next
	            </button>
	            <ErrorMessage
	              name="numberOnPolicy"
	              component="div"
	              className="field-error"
	            />
	            <ErrorMessage
	              name="zip"
	              component="div"
	              className="field-error"
	            />
		    </div>
		  </div>
		  <div class="plans">
		    <nav>
		      <ul>
		        <li>
		          <img src="/assets/pill-icon.svg" alt="Obamacare Plans"/>
		          <p>Obamacare Plans</p>
		        </li>
		        <li>
		          <img src="/assets/life-case.svg" alt="Medicare Plans"/>
		          <p>Short-term Plans</p>
		        </li>
		        <li>
		          <img src="/assets/heart-beat.svg" alt="Medicare Plans"/>
		          <p>Medicare Plans</p>
		        </li>
		        <li>
		          <img src="/assets/Laptop Icon.svg" alt="Health Plans"/>
		          <p>Health Plans</p>
		        </li>
		      </ul>
		    </nav>
		  </div>
		  <div class="about">
		   <h3>Everything you need for your health insurance choices in one place!</h3>
		   <div class="about-image"></div>
		   <div class="how-it-works">
		     <h4>Guided Online Experience</h4>
		     <p>We know not many people are healthcare experts, so we provide explanations, product guides, and advice along the way.</p>
		     <h4>Compare XXXXXX+ Insurance Plans and Save</h4>
		     <p>We work hard to deliver the best health plan shopping experience on the web. And it costs you nothing to use our search.</p>
		     <h4>Personalized Recommendations</h4>
		     <p>We sort through your options in our database, and point you in the right direction based on your needs, preferences, and budget.</p>
     	   <div class="input-group">
	            <label htmlFor="numberOnPolicy" name="numberOnPolicy" >Number on Policy</label>
	            <Field htmlFor="numberOnPolicy" name="numberOnPolicy" component="select" placeholder="1">
	              <option value="1" selected>1</option>
	              <option value="2" >2</option>
	              <option value="3" >3</option>
	              <option value="4+" >4+</option>
	            </Field>
	            <label htmlFor="zip" name="zip">Zip Code</label>
	          <Field
	                    name="zip"
	                    render={({ field }) => (
	                      <MaskedInput
	                        {...field}
	                        mask={zipMask}
	                        placeholder="ZIP Code"
	                        type="text"
	                      />
	                    )}
	                  />
	            <button
	              type="button"
	              onClick={props.navigateNext}
	              disabled={!(props.values.numberOnPolicy && props.values.zip)}
	            >
	              Next
	            </button>
	            <ErrorMessage
	              name="numberOnPolicy"
	              component="div"
	              className="field-error"
	            />
	            <ErrorMessage
	              name="zip"
	              component="div"
	              className="field-error"
	            />
		    </div>
			   </div>
			  </div>
			  <div class="stats">
			    <p>XXXXXXX+ People we’ve helped shop for insurance</p>
			    <p>XXXXX Insurance Plans Available</p>
			    <p>3 minutes to get a quote</p>
			  </div>
			  <div class="testimonials">
			    <h3>We’ve helped XXXXX of Americans shop for Helathcare</h3>
			    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo neque, feugiat sit amet lacus in, dapibus convallis ligula. Vivamus ornare sed ligula sed porta.”<br/><br/>- Some Person</p>
			    <p>“In hac habitasse platea dictumst. Mauris laoreet massa et nibh dapibus bibendum. Nunc mauris nulla, tincidunt in tristique.”<br/><br/>- Some Person</p>

		    	    <div class="input-group">
	            <label htmlFor="numberOnPolicy" name="numberOnPolicy" >Number on Policy</label>
	            <Field htmlFor="numberOnPolicy" name="numberOnPolicy" component="select" placeholder="1">
	              <option value="">Select</option>
	              <option value="1">1</option>
	              <option value="2">2</option>
	              <option value="3">3</option>
	              <option value="4+">4+</option>
	            </Field>
	            <label htmlFor="home_zip" name="home_zip">Zip Code</label>
	          <Field
	                    name="home_zip"
	                    render={({ field }) => (
	                      <MaskedInput
	                        {...field}
	                        mask={zipMask}
	                        placeholder="ZIP Code"
	                        type="text"
	                      />
	                    )}
	                  />
	            <button
	              type="button"
	              onClick={props.navigateNext}
	              disabled={!(props.values.numberOnPolicy && props.values.home_zip)}
	            >
	              Next
	            </button>
	            <ErrorMessage
	              name="numberOnPolicy"
	              component="div"
	              className="field-error"
	            />
	            <ErrorMessage
	              name="zip"
	              component="div"
	              className="field-error"
	            />
		    </div>
			  </div>
			</main>
	</div>
);

export default PageOne;
