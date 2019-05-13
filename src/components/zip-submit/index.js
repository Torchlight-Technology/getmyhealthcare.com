import { h, Component, render } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import Progress from 'preact-progress';
import Wiz from '../../routes/form/Wiz';
import Wizard from '../../routes/form/Wizard';

class ZipSubmit extends Component {
    render(props, state) {
      return (
        <div class="input-group">
        <label htmlFor="household_size" name="household_size">Number on Policy</label>
        <Field htmlFor="household_size" name="household_size" component="select" placeholder="1">
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
          onClick={this.props.navigateNext}
          disabled={!(this.props.values.household_size && this.props.values.home_zip)}
        >
          Next
        </button>
        <ErrorMessage
          name="household_size"
          component="div"
          className="field-error"
        />
        <ErrorMessage
          name="home_zip"
          component="div"
          className="field-error"
        />
      </div>);
  }
}

export default ZipSubmit;
