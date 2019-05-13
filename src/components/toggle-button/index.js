import { h, render, Component } from 'preact';

class ToggleButton extends Component {
  constructor () {
    super()
    this.state = {active: false};
  }

  toggle (e,isActive) {
    this.setState({active:!isActive});
  }

  render (props,{active}) {
  		return (
      	<div class={active ? "show button-container" : "button-container" }>
        {!active && <button onClick={e => this.toggle(e,false)}>&#9776;</button>}
        {active && <button onClick={e => this.toggle(e,true)}>✕</button>}
        </div>
      )
  }
}

export default ToggleButton;