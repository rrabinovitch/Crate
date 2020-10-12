// Imports

// App Imports
import {
  CRATES_GET_LIST_REQUEST,
  CRATES_GET_LIST_RESPONSE,
  CRATES_GET_LIST_FAILURE,
  CRATES_GET_REQUEST,
  CRATES_GET_RESPONSE,
  CRATES_GET_FAILURE,
} from './actions'

// Crates list

// Initial State
// initially sets state to have no crates
const cratesInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
// reducers called by actions in actions.js
// collects information passed in by actions and adds them to the redux store
export const crates = (state = cratesInitialState, action) => {
  switch (action.type) {
    // sets isLoading to what is passed in by action creator
    case CRATES_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    // sets state/store to information retrieved on getting the response to the getList action (either an error message or updating the list of available crates); also stops isLoading message
    case CRATES_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    // if there is an error, stops isLoading message and displays error saying crates can't be retrieved
    case CRATES_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    // returns the cratesInitialState  
    default:
      return state
  }
}

// Single crate

// Initial State
// no information stored for an individual crate in store
const crateInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const crate = (state = crateInitialState, action) => {
  switch (action.type) {
    // sets isLoading to what is passed in by action creator
    case CRATES_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    // sets either error message or the crate's information in the store on the response to the post request; changes loading message to false
    case CRATES_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    // if there is an issue with the post request, removes loading message and puts an error message in store
    case CRATES_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    // returns the crateInitialState
    default:
      return state
  }
}
