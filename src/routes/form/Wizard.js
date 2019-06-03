import { h, Component } from 'preact';
import { Formik } from 'formik';
import { DisplayFormikState } from './helper';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';
import Wiz from './Wiz';
import MaskedInput from "react-text-mask";
import Progress from 'preact-progress';
import { SignUpSchema } from './validation';
import base64 from 'base-64';
import Debug from './helper';
import { route } from 'preact-router';

const userAgent = navigator.userAgent;

const universal_leadid = document.getElementById('leadid_token').value;
let ip_address = '';
const API_URL = process.env.API_URL;
class Wizard extends Component {
  state = {
    pageIndex: 0,
    initialValues: {
      home_zip: '',
      dateOfBirth: '',
      gender: '',
      household_size: '1',
      income: '42500',
      life_event: 'no',
      existing_conditions: 'none',
      tobacco: '0',
      name_first: '',
      name_last: '',
      home_street: '',
      email: '',
      phone_home: '',
      coverageType: '',
      user_agent: userAgent,
      universal_leadid: universal_leadid,
      trusted_form_url: "",
      ip_address: "127.0.0.1",
      offer_id: "",
      sub_id1: "",
      sub_id2: "",
      sub_id3: "",
      datetime_collected: "",
      dob: "",
      client_name: "",
      tcpa_disclosure: "1",
      tcpa_consent_language: `By completing a contact form on this site, clicking "Show Me My Results", or calling the number listed above, you may be directed to a sales agent who can answer your questions and provide information about health insurance plans and other services. (Agents are not connected with or endorsed by the U.S. government.) By interacting with the site, you provide an electronic signature by which you agree to the following terms: "I consent to receive emails, notifications, and calls about health insurance plans or products from these companies and their agents to the telephone number(s) I have provided. 'Calls' may be auto-dialed, use artificial or pre-recorded voices, and/or be text messages, including recurring messages sent via a short code program. I understand that my consent to receive calls is not required in order to purchase any property, goods or services. My telephone company may impose additional charges for messages. I may revoke my consent to receiving messages at any time. By submitting my information, I confirm that I have read, understand, and agree to these Terms of Use and Privacy Policy."`,
      landing_url: 'https://getmyhealthcare.com/',
      privacy_policy_url: 'https://getmyhealthcare.com/privacy/'
    }
  };
  // Get Ip address from api
  getIpAddress = () => {
    fetch('https://json.geoiplookup.io/')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          ip_address = data.ip;
        });
      }
    )
    .catch(function(err) {
      ip_address = '127.0.0.1';
      console.log('Fetch Error: ', err);
    });
  }

  claimTrustedForm = (formData) => {
    console.log('FormData: ', formData);

    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });

    fetch('trusted-form.php', {
      method: 'POST',
      headers,
      body: formData
    })
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          console.log('Trusted form response: ', data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error: ', err);
    });
  }

  postToOnePingTree = (data) => {
    // POST to one.pingtreetech
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: data
    })
    .then((res) => res.json())
    .then((data) => console.log(JSON.stringify(data)));
  }

  componentWillMount () {
    // Checking if we have session storage created
    if(sessionStorage.getItem('getmyhealth')){
      // If storage exists set initial values from storage
      const initialValues = JSON.parse(sessionStorage.getItem('getmyhealth'))
      this.setState({
        initialValues: initialValues
      })
    } else {
      // if storage does not exists set component initial values to storage
      sessionStorage.setItem('getmyhealth', JSON.stringify(this.state.initialValues))
    }
    // Get Ip address
    this.getIpAddress();
  }


  handleSubmit = (values) => {
    // getting aff values
    values.client_name = this.props.affid || 'HealthDefault';
    values.offer_id = this.props.offer_id || '1';
    values.sub_id1 = this.props.sub_id1 || 's1';
    values.sub_id2 = this.props.sub_id2 || 's2';
    values.sub_id3 = this.props.sub_id3 || 's3';

    values.datetime_collected = new Date().toISOString();

    // get date of birth in correct format
    const month = values.dateOfBirth.substr(0, 2);
    const day = values.dateOfBirth.substr(3, 2);
    const year = values.dateOfBirth.substr(6, 4);
    values.dob = year + '-' + month + '-' + day;
    delete values.dateOfBirth;

    // format phone_home 
    values.phone_home = values.phone_home.toString().replace(/\D/g,'');

    //Assign ip address to values
    values.ip_address = ip_address;

    //Assign trusted from url. Value get from trusted from script on template.html
    let trusted_form_url_value =  document.getElementById('trusted_form_url_0').value;
    values.trusted_form_url = trusted_form_url_value;

    const data = Object.keys(values).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(values[k])}`).join('&');
    console.log('form data object: ', values);
    console.log('form data query: ', data);

    this.claimTrustedForm(data);
    this.postToOnePingTree(data);

    sessionStorage.setItem('cpcman', JSON.stringify(values));
    route('/thank-you');
  }

  render() {
    return (
      <Wiz pages={[PageOne, PageTwo, PageThree, PageFour, PageFive]} props={this.props}>
      {wizProps => (
        <Formik
          initialValues={this.state.initialValues}
          validationSchema={SignUpSchema}
          handleChange
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
              this.handleSubmit(values);
              setSubmitting(false);
            // }, 1000);
          }}
        >
          {props => {
            const { handleSubmit } = props;
            return (
              <form onSubmit={handleSubmit}>
                {wizProps.renderPage(props)}

              </form>
            );
          }}
        </Formik>
      )}
    </Wiz>
    );
  }
}

export default Wizard;
