import { h, Component } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import Progress from 'preact-progress';
//import ZipSubmit from '../../components/zip-submit';

const zipMask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/];

const onChange = (ctx, val) => console.log(`${val}% complete`);

// TODO Make ZipSubmit component (onClick send to top of page)
class PageOne extends Component  {

	getStateAndCity = async (zip) => {
		let response =  fetch(`https://api.zippopotam.us/us/${zip}`, {
			method: 'GET'
		})
		.then((res) => res.json())
		.then((data) => (data.places[0]));

		let data = await response;

		return {
			home_city: data['place name'],
			home_state: data['state abbreviation']
		}
	}

	handleNext = async() => {
		// get localStorage assign to temp const
		const tempStorage = JSON.parse(sessionStorage.getItem('getmyhealth'))

		// get state and city from API
		const stateAndCity =  await this.getStateAndCity(tempStorage['home_zip'])
		tempStorage['home_city'] = stateAndCity.home_city;
		tempStorage['home_state'] = stateAndCity.home_state;

		// Set local storage with new values
		sessionStorage.setItem('getmyhealth', JSON.stringify(tempStorage))

		// Set hidden values form API submit
		this.props.setFieldValue('home_city',  stateAndCity.home_city)
		this.props.setFieldValue('home_state',  stateAndCity.home_state)

		// Navigate to next page
		this.props.navigateNext()

	}

	checkForErrors = (errors) => !errors.hasOwnProperty('home_zip')

	render(){

		return (
			<div className="page">
			<main>
				<div class="mast">
					<h2>Find the right health insurance for you in Philadelphia, PA.</h2>
					<div class="mast-image"></div>
					<h3>Get Started!</h3>
					<div class="input-group">
								<label htmlFor="numberOnPolicy" name="numberOnPolicy" >Number on Policy</label>
								<select htmlFor="numberOnPolicy" value={this.props.values.numberOnPolicy} name="numberOnPolicy" placeholder="1" onChange={(e) => { this.props.handleChange(e); this.props.handleLocalStorage(e) } }>
									<option value="">Select</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4+">4+</option>
								</select>
								<label htmlFor="home_zip" name="home_zip">Zip Code</label>
							<Field
									name="home_zip"
									render={({ field }) => (
										<MaskedInput
											{...field}
											mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/]}
											placeholder="ZIP Code"
											type="text"
											guide={true}
											onChange={(e)=>{
												this.props.handleChange(e);
												this.props.handleLocalStorage(e);
											}}
										/>
									)}
								/>
								<button
									type="button"
									onClick={ this.handleNext }
									disabled={!(this.checkForErrors(this.props.errors) && this.props.values.numberOnPolicy && this.props.values.home_zip)}
								>
									Next
								</button>
								<ErrorMessage
									name="numberOnPolicy"
									component="div"
									className="field-error"
								/>
								<ErrorMessage
									name="home_zip"
									component="div"
									className="field-error"
								/>
					</div>
				</div>
				<div class="plans">
					<nav>
						<ul>
							<li>
								<img src="/assets/pill-icon.svg" alt="Obamacare Plans" />
								<p>Obamacare Plans</p>
							</li>
							<li>
								<img src="/assets/life-case.svg" alt="Medicare Plans" />
								<p>Short-term Plans</p>
							</li>
							<li>
								<img src="/assets/heart-beat.svg" alt="Medicare Plans" />
								<p>Medicare Plans</p>
							</li>
							<li>
								<img src="/assets/Laptop Icon.svg" alt="Health Plans" />
								<p>Health Plans</p>
							</li>
						</ul>
					</nav>
				</div>
				<div class="about">
				<h3>Everything you need for your health insurance choices in one place!</h3>
				<div class="about-image"></div>
				<div id="how-it-works" class="how-it-works">
					<h4>Guided Online Experience</h4>
					<p>We know not many people are healthcare experts, so we provide explanations, product guides, and advice along the way.</p>
					<h4>Compare XXXXXX+ Insurance Plans and Save</h4>
					<p>We work hard to deliver the best health plan shopping experience on the web. And it costs you nothing to use our search.</p>
					<h4>Personalized Recommendations</h4>
					<p>We sort through your options in our database, and point you in the right direction based on your needs, preferences, and budget.</p>
					<div class="input-group">
								<label htmlFor="numberOnPolicy" name="numberOnPolicy" >Number on Policy</label>
								<select htmlFor="numberOnPolicy" value={this.props.values.numberOnPolicy} name="numberOnPolicy" placeholder="1" onChange={(e) => { this.props.handleChange(e); this.props.handleLocalStorage(e) } }>
									<option value="">Select</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4+">4+</option>
								</select>
								<label htmlFor="home_zip" name="home_zip">Zip Code</label>
							<Field
												name="home_zip"
												render={({ field }) => (
													<MaskedInput
														{...field}
														mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/]}
														placeholder="ZIP Code"
														type="text"
														guide={true}
														onChange={(e)=>{
															this.props.handleChange(e);
															this.props.handleLocalStorage(e);
														}}
													/>
												)}
											/>
								<button
									type="button"
									onClick={this.handleNext}
									disabled={!(this.checkForErrors(this.props.errors) && this.props.values.numberOnPolicy && this.props.values.home_zip)}
								>
									Next
								</button>
								<ErrorMessage
									name="numberOnPolicy"
									component="div"
									className="field-error"
								/>
								<ErrorMessage
									name="home_zip"
									component="div"
									className="field-error"
								/>
					</div>
					</div>
					</div>
					<div id="stats" class="stats">
						<p>XXXXXXX+ People we’ve helped shop for insurance</p>
						<p>XXXXX Insurance Plans Available</p>
						<p>3 minutes to get a quote</p>
					</div>
					<div id="testimonials" class="testimonials">
						<h3>We’ve helped XXXXX of Americans shop for Helathcare</h3>
						<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo neque, feugiat sit amet lacus in, dapibus convallis ligula. Vivamus ornare sed ligula sed porta.”<br/><br/>- Some Person</p>
						<p>“In hac habitasse platea dictumst. Mauris laoreet massa et nibh dapibus bibendum. Nunc mauris nulla, tincidunt in tristique.”<br/><br/>- Some Person</p>

								<div class="input-group">
								<label htmlFor="numberOnPolicy" name="numberOnPolicy" >Number on Policy</label>
								<select htmlFor="numberOnPolicy" value={this.props.values.numberOnPolicy} name="numberOnPolicy" placeholder="1" onChange={(e) => { this.props.handleChange(e); this.props.handleLocalStorage(e) } }>
									<option value="">Select</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4+">4+</option>
								</select>
								<label htmlFor="home_zip" name="home_zip">Zip Code</label>
							<Field
												name="home_zip"
												render={({ field }) => (
													<MaskedInput
														{...field}
														mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/]}
														placeholder="ZIP Code"
														type="text"
														guide={true}
														onChange={(e)=>{
															this.props.handleChange(e);
															this.props.handleLocalStorage(e);
														}}
													/>
												)}
											/>
								<button
									type="button"
									onClick={this.handleNext}
									disabled={!(this.checkForErrors(this.props.errors) && this.props.values.numberOnPolicy && this.props.values.home_zip)}
								>
									Next
								</button>
								<ErrorMessage
									name="numberOnPolicy"
									component="div"
									className="field-error"
								/>
								<ErrorMessage
									name="home_zip"
									component="div"
									className="field-error"
								/>
					</div>
					</div>
				</main>
		</div>
	);
}
}
export default PageOne;
