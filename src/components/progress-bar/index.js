class ProgressBarExample extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      percentage: 0
    }
    this.nextStep = this.nextStep.bind(this)
  }
  
  nextStep() {
    if(this.state.percentage === 100) return 
    this.setState({ percentage: this.state.percentage + 20 })
  }
  
  render() {
    return (
      <div>
        <ProgressBar percentage={this.state.percentage} />
        
        <div style={{ marginTop: '20px' }}>  
          <button 
            onClick={this.nextStep}
           >
            Next Step
          </button>  
        </div>      
      </div>
    )
  }  
}

const ProgressBar = (props) => {
  return (
      <div class="progress-bar">
        <Filler percentage={props.percentage} />
      </div>
    )
}

const Filler = (props) => {
  return <div class="filler" style={{ width: `${props.percentage}%` }} />
}

