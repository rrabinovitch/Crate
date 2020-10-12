// App Imports
import { MESSAGE_SHOW, MESSAGE_HIDE } from './actions'

// Initial State
// what is in the redux store at the start
export const commonInitialState = {
  message: {
    text: null,
    open: false
  }
}

// State
export default (state = commonInitialState, action) => {
  switch (action.type) {
    // adds the message to be shown to store
    case MESSAGE_SHOW:
      return {
        ...state,
        message: {
          text: action.message,
          open: true
        }
      }

    // removes message from the store
    case MESSAGE_HIDE:
      return {
        ...state,
        message: {
          text: null,
          open: false
        }
      }

    // returns default state stated at the top of this file
    default:
      return state
  }
}
