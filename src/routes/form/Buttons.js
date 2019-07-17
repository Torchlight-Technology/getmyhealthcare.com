import { h, Component } from 'preact';

const setPageFieldsTouched = (errors, setFieldTouched, nextPage, fields) => {
  
  const checkErrors = (errors) => {
    return fields.filter( field => errors.hasOwnProperty(field))
  }

  fields.map(field => setFieldTouched(field))

  if(checkErrors(errors).length === 0) {
    nextPage()
  }

}

const buttonType = (props) => {
  switch (props.type) {
    case 'next':
      return (
        <button
          type="button"
          onClick={
            () => { 
              props.validateForm()
              .then( (errors) => setPageFieldsTouched(errors, props.setFieldTouched, props.navigateNext, props.fields) 
              )}
            }
          className={props.className}
        >
          {props.text || 'Next'}
        </button>
      )
    case 'back':
      return (
        <button
          type="button"
          class="back-button"
          onClick={props.navigateBack}
        >
          {props.text || 'Back'}
        </button>
      )
    case 'submit':
      return (
        <button
          className={props.className}
          type="submit"
        >
          {props.text || 'Submit'}
        </button>
      )
    default:
      return null;
  }
}

const Buttons = props => (
  buttonType(props)
)

export default Buttons;