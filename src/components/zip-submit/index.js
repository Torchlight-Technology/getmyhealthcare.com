import { h, Component } from 'preact';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import MaskedInput from "react-text-mask";

class zipSubmit extends Component {
  <div class="input-group">
          <label htmlFor="numberOnPolicy" name="numberOnPolicy" >Number on Policy</label>
          <Field htmlFor="numberOnPolicy" name="numberOnPolicy" component="select" placeholder="1">
            <option value="1" selected>1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
            <option value="4+" >4+</option>
          </Field>
          <ErrorMessage
            name="numberOnPolicy"
            component="div"
            className="field-error"
          />
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
          <ErrorMessage
            name="zip"
            component="div"
            className="field-error"
          />
          <button
            type="button"
            onClick={props.navigateNext}
            disabled={!(props.values.numberOnPolicy && props.values.zip)}
          >
            Next
          </button>
  </div>  
}

export default zipSubmit;