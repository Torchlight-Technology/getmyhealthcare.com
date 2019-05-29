import { h, Component, render } from 'preact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';

class ZipSubmit extends Component {
    render(props, state) {
      return (
        <div class="input-group">
            <label htmlFor="home_zip" name="home_zip">Zip Code</label>
            <Field
              name="home_zip"
              validate={isValidZip}
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
              disabled={!(this.checkForErrors(this.props.errors) && this.props.values.household_size && this.props.values.home_zip)}
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
