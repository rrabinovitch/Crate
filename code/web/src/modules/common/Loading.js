// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { grey2 } from '../../ui/common/colors'

// Component
// provides styling for a loading message
// if there is no message passed in from props, will display 'loading...'
const Loading = (props) => (
  <p style={{ color: grey2, textAlign: 'center', padding: '2em' }}>{props.message ? props.message : 'loading...'}</p>
)

// Component Properties
Loading.propTypes = {
  message: PropTypes.string
}

export default Loading
