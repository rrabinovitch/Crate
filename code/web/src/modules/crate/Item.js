// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user'
import { messageShow, messageHide } from '../common/api/actions'
import { create } from '../subscription/api/actions'

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  // function that uses crate id
  onClickSubscribe = (crateId) => {
    // changes isLoading in this.state to true
    this.setState({
      isLoading: true
    });

    // shows specified message
    this.props.messageShow('Subscribing, please wait...')

    // calls post request to add a subscription
    this.props.create({ crateId })
      .then(response => {
         // if there is an error, show the message that was received
        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        // if no errors, show that subscription was applied/added
        } else {
          this.props.messageShow('Subscribed successfully.')
          // adds subscription to cards to display to user? is this something with router?
          this.props.history.push(userRoutes.subscriptions.path)
        }
      })
      // if there was an error with the post request, it will display the following message on the screen.
      .catch(error => {
        this.props.messageShow('There was some error subscribing to this crate. Please try again.')
      })
      // when done with either success or failure, makes button viable again; user can sign up for a crate more than once?
      .then(() => {
        this.setState({
          isLoading: false
        })

        // removes message after 5 seconds
        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })

      // this would need to be adjusted to go to the style survey, add that info to the server/database, and then add the subscription for the user; might make sense to move this method to the style survey instead in that case.
  }

  // creates & renders each crate
  render() {
    // destructures props that are passed in from List component or from state
    const { id, name, description } = this.props.crate
    const { isLoading } = this.state

    return (
      // styling and content for subscription boxes available cards
      <Card style={{ width: '18em', backgroundColor: white }}>
        <p style={{ padding: '2em 3em 0 3em' }}>
          <img src={`${ APP_URL }/images/crate.png`} alt={name} style={{ width: '100%' }}/>
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>{name}</H4>

          <p style={{ color: grey2, marginTop: '1em' }}>{description}</p>

          <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
          // button that allows the user to sign up for a subscription box
          // when button is clicked, it calls onClickSubscribe method and binds this and id to the specific card that is clicked on.
            <Button
              theme="primary"
              onClick={this.onClickSubscribe.bind(this, id)}
              type="button"
              disabled={ isLoading }
            >
              <Icon size={1.2} style={{ color: white }}>add</Icon> Subscribe
            </Button>
          </p>
        </div>
      </Card>
    )
  }
}

// Component Properties
Item.propTypes = {
  crate: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
// also known as mapStatetoProps
function itemState(state) {
  return {
    user: state.user
  }
}

export default connect(itemState, { create, messageShow, messageHide })(withRouter(Item))
