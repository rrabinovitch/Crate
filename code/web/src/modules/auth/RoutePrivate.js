// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// App Imports
import userRoutes from '../../setup/routes/user'

// Component
const RoutePrivate = (props) => (
  // if user is authenticated
  props.user.isAuthenticated
  // if route role === true; aka admin
    ? props.role
      // if the user's role matches the props role
        ? props.user.details.role === props.role
          //if user role & props role match, create route
          ? <Route {...props} component={props.component}/>
          // if roles don't match; redirects to login route
          : <Redirect to={userRoutes.login.path}/>
        // if user role & props role don't match, creates route
        : <Route {...props} component={props.component}/>
    // if props.role evaluates to false, redirect to login page
    : <Redirect to={userRoutes.login.path}/>
)

// Component Properties
RoutePrivate.propTypes = {
  user: PropTypes.object.isRequired,
}

// Component State
function routePrivateState(state) {
  return {
    user: state.user
  }
}

export default connect(routePrivateState, {})(RoutePrivate);
