// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { grey3 } from '../../ui/common/colors'

// Component
// provides styling and message to display if there is an error message; provides a default message if there is an error with no message
const EmptyMessage = (props) => (
  <p style={{ textAlign: 'center', color: grey3, flex: 1, padding: 10 }}>{props.message}</p>
)

// Component Properties
EmptyMessage.propTypes = {
  message: PropTypes.string
}

// Component Default Properties
EmptyMessage.defaultProps = {
  message: 'No data to show'
}

export default EmptyMessage
