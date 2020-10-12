// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// UI Imports
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'
import { messageShow, messageHide } from '../common/api/actions'
import { remove, getListByUser } from '../subscription/api/actions'

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  onClickUnsubscribe = (id) => {
    // creates a dialog box that a user can confirm the deletion
    let check = confirm('Are you sure you want to unsubscribe to this crate?')

    // if user selects ok, sets isLoading to true to display a loading message
    if(check) {
      this.setState({
        isLoading: true
      })
      // message that should be shown - should be changed to unsubscribing?
      this.props.messageShow('Subscribing, please wait...')

      // calls the remove from the subscription/actions file; post request to remove that crate from that user's subscriptions
      this.props.remove({id})
        .then(response => {
          // if there is an error message on retrieving the post request data, it will be shown on the messageShow component
          if (response.data.errors && response.data.errors.length > 0) {
            this.props.messageShow(response.data.errors[0].message)
          // if there is no error message, unsubscribing has worked and displays a message saying so
          } else {
            this.props.messageShow('Unsubscribed successfully.')

            // calls function to update the user's subscribed boxes & displays them
            this.props.getListByUser()
          }
        })
        // if there is an error with the post request, the below message will be shown.
        .catch(error => {
          this.props.messageShow('There was some error subscribing to this crate. Please try again.')
        })
        // once the request is complete or an error is thrown, is loading is set to false to remove loading message
        .then(() => {
          this.setState({
            isLoading: false
          })

          // hides any of the displayed messages after 5 seconds
          window.setTimeout(() => {
            this.props.messageHide()
          }, 5000)
        })
    }
  }

  // displays the crate a user is subscribed to
  // styling and info for that specific crate
  render() {
    const { id, crate, createdAt } = this.props.subscription
    const { isLoading } = this.state

    return (
      <Card style={{ width: '18em', backgroundColor: white }}>
        <p style={{ padding: '2em 3em 0 3em' }}>
          <img src={`${ APP_URL }/images/crate.png`} alt={ crate.name } style={{ width: '100%' }}/>
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>{ crate.name }</H4>

          <p style={{ color: grey2, marginTop: '1em' }}>{ crate.description }</p>

          <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
          {/* onClickUnsubscribe is called when the button is clicked; binds this and id to the card the button is clicked on */}
            <Button
              theme="secondary"
              onClick={this.onClickUnsubscribe.bind(this, id)}
              type="button"
              disabled={ isLoading }
            >
              <Icon size={1.2} style={{ color: white }}>remove_circle_outline</Icon> Unsubscribe
            </Button>
          </p>
          // states when the person subscribed to this crate
          <p style={{ color: grey2, marginTop: '1em', fontSize: '0.8em', textAlign: 'center' }}>
            Subscribed on { new Date(parseInt(createdAt)).toDateString() }
          </p>
        </div>
      </Card>
    )
  }
}

// Component Properties
Item.propTypes = {
  subscription: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  getListByUser: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function itemState(state) {
  return {
    user: state.user
  }
}

export default connect(itemState, { remove, getListByUser, messageShow, messageHide })(withRouter(Item))
