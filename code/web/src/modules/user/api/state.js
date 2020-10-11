// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
  // It appears we can add the default state for the 'style-preferences' to the currently exported userInitialState.
  // stylePreferences: []; /////
}

// State

// Will need to create/render a StylePreferences Component

// case SET_USER: appears to be setting the User's default state in the store.
// case LOGIN_REQUEST: appears to handle the login request
// case LOGIN_RESPONSE: appears to handle the response from the login updating the error state if nec.
// case LOGOUT: appears to handle the logout, setting back values to their initial state in the store.

// Will need a case SET_STYLE: That will create an updated state for the  user's stylePreferences once they've submitted their choices. 

export default (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }

    default:
      return state
  }
}