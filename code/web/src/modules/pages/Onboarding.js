// Imports
import React, { PureComponent } from 'react'

// UI Imports
import { Grid, GridCell } from '../../ui/grid' // package to add CSS grid into react
import { H1, H6 } from '../../ui/typography'
import Modal from '../../ui/modal/Modal'
import Button from '../../ui/button'
import { white } from '../../ui/common/colors'
import { textLevel1 } from '../../ui/common/shadows'

// App Imports
import { APP_URL } from '../../setup/config/env'

// Component
class Onboarding extends PureComponent {

  constructor(props) {
    super(props) // nothing passed in for props?

    this.state = {
      visible: false,
      currentStep: 0
    }
  }

  componentDidMount() { // on load,
    const onboarding = window.localStorage.getItem('onboarding')
    if (!onboarding) { // if onboarding isn't in localStorage
      this.toggleVisible(true) // calls toggleVisible

      window.localStorage.setItem('onboarding', 1) // adds localStorage item for onboarding and sets to 1
    } // on load, should display a modal window w/info on site
  }

  toggleVisible = (visible) => {
    this.setState({
      visible // changes visible in state to true when called; displays a modal window?
    })
  }

  nextStep = () => {
    this.setState(state => ({
      currentStep: state.currentStep + 1 // resets state current step and increases by 1
    }))
  }

  close = () => {
    this.toggleVisible(false) // when called, changes visible to false
  }

  render() {
    const steps = [ // array of different steps to display
      /* 1. Welcome to Crate */
      <Grid alignCenter={true} style={{ height: '100%', textAlign: 'center', color: white }}>
        {/* Left - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>Welcome to Crate</H1>

          <H6 style={{ marginTop: '0.5em' }}>Your monthly subscription of trendy <br/> clothes and accessories</H6>

          <Button theme="primary" style={{ marginTop: '1.5em' }} onClick={this.nextStep}>Next</Button> {/* this increases step count by 1*/}
        </GridCell>

        {/* Right - Image */}
        <GridCell>
          <img src={`${ APP_URL }/images/collage.png`} alt="collage" title="products collage" style={{ width: 400 }}/>
        </GridCell>
      </Grid>,

      /* 2. For Men */
      <Grid alignCenter={true} style={{ height: '100%', textAlign: 'center', color: white }}>
        {/* Left - Image */}
        <GridCell>
          <img src={`${ APP_URL }/images/collage.png`} alt="collage" title="products collage" style={{ width: 400 }}/>
        </GridCell>

        {/* Right - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>For Men</H1>

          <H6 style={{ marginTop: '0.5em' }}>Your monthly subscription of trendy <br/> clothes and accessories</H6>

          <Button theme="primary" style={{ marginTop: '1.5em' }} onClick={this.nextStep}>Next</Button>
        </GridCell>
      </Grid>,

      /* 3. For Women */
      <Grid alignCenter={true} style={{ height: '100%', textAlign: 'center', color: white }}>
        {/* Left - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>For Women</H1>

          <H6 style={{ marginTop: '0.5em' }}>Your monthly subscription of trendy <br/> clothes and accessories</H6>

          <Button theme="primary" style={{ marginTop: '1.5em' }} onClick={this.nextStep}>Next</Button>
        </GridCell>

        {/* Right - Image */}
        <GridCell>
          <img src={`${ APP_URL }/images/collage.png`} alt="collage" title="products collage" style={{ width: 400 }}/>
        </GridCell>
      </Grid>,

      /* 4. Fix me up */
      <Grid alignCenter={true} style={{ height: '100%', textAlign: 'center', color: white }}>
        {/* Center - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>Fix me up</H1>

          <H6 style={{ marginTop: '0.5em' }}>Subscribe to your crate!</H6>

          <Button theme="primary" style={{ marginTop: '1.5em' }} onClick={this.close}>Start</Button>
        </GridCell>
      </Grid>
    ]

    return (
      <div>
        {/* Modal */}
        {/* on load, this changes visible to true
          modal window is displayed
          each time the next button is clicked, it displays the next item in the steps array
          when the user clicks on the Start button,
          this.close is called, changing visibility to false
        */}
        <Modal visible={this.state.visible}>
          {steps[this.state.currentStep]}
        </Modal>
      </div>
    )
  }
}

export default Onboarding
