// Imports

// App Imports
import {
  SUBSCRIPTIONS_GET_LIST_REQUEST,
  SUBSCRIPTIONS_GET_LIST_RESPONSE,
  SUBSCRIPTIONS_GET_LIST_FAILURE,
  SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST,
  SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
  SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE,
  SUBSCRIPTIONS_GET_REQUEST,
  SUBSCRIPTIONS_GET_RESPONSE,
  SUBSCRIPTIONS_GET_FAILURE,
} from './actions'

// Subscriptions list

// Initial State
const subscriptionsInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
// reducers - add information to redux store

// reducers for getting all subscriptions list
export const subscriptions = (state = subscriptionsInitialState, action) => {
  switch (action.type) {
    // creates an object to post to get list
    case SUBSCRIPTIONS_GET_LIST_REQUEST:
      return {
        // returns what is currently in state
        ...state,
        // changes isLoading to what is passed in from action creator
        isLoading: action.isLoading,
        // changes error based on what is passed in from action creator
        error: null
      }
    // creates an object of the post response for all subscriptions
    case SUBSCRIPTIONS_GET_LIST_RESPONSE:
      return {
        // what is currently in state
        ...state,
        // reverts isLoading since post is done
        isLoading: false,
        // if there is an error, this is changed
        error: action.error,
        // data from post response is passed in here
        list: action.list
      }

    // creates an error message if post request fails
    case SUBSCRIPTIONS_GET_LIST_FAILURE:
      return {
        // what is currently in State
        ...state,
        // reverts isLoading since post request failed; no waiting
        isLoading: false,
        // error message passed in from action creator
        error: action.error
      }

    default:
      // return default state
      return state
  }
}

// Subscriptions list by user

// Initial State
// sets initial state to essentially be empty
const subscriptionsByUserInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
// reducer for getting all subscriptions by user
export const subscriptionsByUser = (state = subscriptionsByUserInitialState, action) => {
  switch (action.type) {
    case SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST:
    // creates object in state that is used in the post request
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }
    // adds users subscriptions to store
    case SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE:
      return {
        // keeps state
        ...state,
        // finished with request, loading message no longer needed
        isLoading: false,
        // if there is an error passed in, it's updated
        error: action.error,
        // user subscriptions updated
        list: action.list
      }
    // error handling reducer
    case SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE:
      return {
        // keeps current state
        ...state,
        // removes loading message
        isLoading: false,
        // adds error message from action creator
        error: action.error
      }

    default:
      // return default state
      return state
  }
}

// Single subscription

// Initial State
const subscriptionInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const subscription = (state = subscriptionInitialState, action) => {
  switch (action.type) {
    case SUBSCRIPTIONS_GET_REQUEST:
    // creates initial state for post request
      return {
        // current state
        ...state,
        // passes in loading statement from action
        isLoading: action.isLoading,
        // removes error if there was one
        error: null
      }
    // adds requested crate to store
    case SUBSCRIPTIONS_GET_RESPONSE:
      return {
        // keeps state
        ...state,
        // clears below information since request is done
        isLoading: false,
        error: action.error,
        // updates store w/requested crate info
        item: action.item
      }
    // error handling for post request not working
    case SUBSCRIPTIONS_GET_FAILURE:
      return {
        // keep state
        ...state,
        // clears loading since request failed
        isLoading: false,
        // updates message with what's passed in in catch
        error: action.error
      }

    default:
      // return default state
      return state
  }
}
