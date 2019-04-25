import { h, Component } from 'preact';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { DisplayFormikState } from './helper';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';
import Wiz from './Wiz';
import MaskedInput from "react-text-mask";

const SignUpSchema = Yup.object().shape({
  numberOnPolicy: Yup.mixed()
    .oneOf(['1', '2', '3', '4+'])
    .required('Please select'),
  // Apply mask
  zip: Yup.string()
    .length(5)
    .required('Enter ZIP'),
  // Apply mask
  dateOfBirth: Yup.string()
    .required('Required'),
  gender: Yup.mixed()
    .oneOf(['Male', 'Female'])
    .required('Gender is required'),
  tobacco: Yup.mixed()
    .oneOf(['Yes', 'No'])
    .required('Your tobacco usage is required.'),
  income: Yup.number()
    .required('Your income must be included'),
  coverageType: Yup.mixed()
    .oneOf(['Bronze', 'Silver', 'Gold', 'Platinum'])
    .required('Please select your coverage type.'),
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  // Apply mask 
  streetAddress: Yup.string()
    .required('Please enter street address'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  // Apply mask
  phone: Yup.string()
    .required('Phone number is required'),
});

const initialValues = {
    numberOnPolicy: '',
    zip: '',
    dateOfBirth: '',
    gender: '',
    tobacco: '',
    income: '',
    coverageType: '',
    firstName: '',
    lastName: '',
    streetAddress: '',
    email: '',
    phone: ''
};

class Wizard extends Component {
    state = {
        pageIndex: 0
    };

    render() {
        return (
            <Wiz pages={[PageOne, PageTwo, PageThree, PageFour, PageFive]}>
				{wizProps => (
					<div>
						<Formik
							initialValues={initialValues}
							validationSchema={SignUpSchema}
							onSubmit={(values, { setSubmitting }) => {
								setTimeout(() => {
									alert(JSON.stringify(values, null, 2));
									setSubmitting(false);
								}, 1000);
							}}
						>
							{props => {
								const { handleSubmit } = props;
								return (
									<form onSubmit={handleSubmit}>
										{wizProps.renderPage(props)}
										<DisplayFormikState {...props} />
									</form>
								);
							}}
						</Formik>
					</div>
				)}
			</Wiz>
        );
    }

    _navigateBack = () => {
        this.setState(prevState => ({
            pageIndex: prevState.pageIndex - 1 < 0 ? prevState.pageIndex - 1 : 0
        }));
    };

    _navigateNext = () => {
        this.setState(prevState => ({
            pageIndex: prevState.pageIndex + 1
        }));
    };

    _renderPage(props) {
        const { pageIndex } = this.state;
        const pageHash = {
            0: PageOne,
            1: PageTwo,
            2: PageThree,
            3: PageFour,
            4: PageFive
        };

        const Page = pageHash[pageIndex];

        return (
            <Page
				{...props}
				navigateBack={this._navigateBack}
				navigateNext={this._navigateNext}
				pageIndex={pageIndex}
			/>
        );
    }
}

export default Wizard;