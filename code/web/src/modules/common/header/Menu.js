// Imports
import React from 'react'

// Component
// iterates over child routes passed in from header and puts them in a new div
const Menu = (props) => {
  const { children, ...others } = props

  return (
    <div {...others}>
      {children}
    </div>
  )
}

export default Menu
