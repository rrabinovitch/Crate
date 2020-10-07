// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
// routeApi is the url for the api for this app; hosted locally
import { routeApi } from '../../../setup/routes'

// Actions Types
export const SUBSCRIPTIONS_GET_LIST_REQUEST = 'SUBSCRIPTIONS/GET_LIST_REQUEST'
export const SUBSCRIPTIONS_GET_LIST_RESPONSE = 'SUBSCRIPTIONS/GET_LIST_RESPONSE'
export const SUBSCRIPTIONS_GET_LIST_FAILURE = 'SUBSCRIPTIONS/GET_LIST_FAILURE'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST = 'SUBSCRIPTIONS/GET_LIST_BY_USER_REQUEST'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE = 'SUBSCRIPTIONS/GET_LIST_BY_USER_RESPONSE'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE = 'SUBSCRIPTIONS/GET_LIST_BY_USER_FAILURE'
export const SUBSCRIPTIONS_GET_REQUEST = 'SUBSCRIPTIONS/GET_REQUEST'
export const SUBSCRIPTIONS_GET_RESPONSE = 'SUBSCRIPTIONS/GET_RESPONSE'
export const SUBSCRIPTIONS_GET_FAILURE = 'SUBSCRIPTIONS/GET_FAILURE'

// Actions

// Get list of all subscriptions
export function getList(isLoading = true) {
  // action creator
  return dispatch => {
    dispatch({
      type: SUBSCRIPTIONS_GET_LIST_REQUEST,
      error: null,
      isLoading
    })

    // fetch request that retrieves all subscriptions
    // goes to api/src/modules/subscription/query.js
    // connects w/object w/same name as in operations ('subscriptions')
    // posts info included in fields to that file
    return axios.post(routeApi, query({
      operation: 'subscriptions',
      fields: ['id', 'user { name, email }', 'crate { id, name, description }', 'createdAt']
    }))
      .then(response => {
        if (response.status === 200) {
          // action creator; passes list of subscriptions to reducer
          dispatch({
            type: SUBSCRIPTIONS_GET_LIST_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.subscriptions
          })
        // if response.status !== 200, prints response to console
        } else {
          console.error(response)
        }
      })
      // if error
      .catch(error => {
        // action creator; passes error message to reducer
        dispatch({
          type: SUBSCRIPTIONS_GET_LIST_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}


// Get list of subscriptions by user
// post request
export function getListByUser(isLoading = true) {
  // action creator; creates post request object
  return dispatch => {
    dispatch({
      type: SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST,
      error: null,
      isLoading
    })
    // post request; passes in id, user info, crate info, and when it's created at
    return axios.post(routeApi, query({
      operation: 'subscriptionsByUser',
      fields: ['id', 'user { name, email }', 'crate { id, name, description }', 'createdAt']
    }))
      // on receiving a user's crates
      .then(response => {
        // if response is good
        if (response.status === 200) {
          // action creator; adds user's subscriptions to redux store
          dispatch({
            type: SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.subscriptionsByUser
          })
        // if response is bad, returns response to console
        } else {
          console.error(response)
        }
      })
      // if there is an error with the post request
      .catch(error => {
        // calls error handling action creator
        dispatch({
          type: SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single subscription
// post request
// slug is the end of the api url
export function get(slug, isLoading = true) {
  // action creator
  return dispatch => {
    dispatch({
      type: SUBSCRIPTIONS_GET_REQUEST,
      isLoading
    })

    // post request; specifies query for query.js
    // specifies variable as slug from url; it's the crate's id
    // fields is info passed in from app
    return axios.post(routeApi, query({
      operation: 'subscription',
      variables: { slug },
      fields: ['id', 'user { name, email }', 'crate { id, name, description }', 'createdAt']
    }))
    // with response from api call
      .then(response => {
        // action creator; adds response to redux store
        dispatch({
          type: SUBSCRIPTIONS_GET_RESPONSE,
          // clears below info to show everything is done
          error: null,
          isLoading: false,
          // adds data from response to store
          item: response.data.data.subscription
        })
      })
      // if error in post request
      .catch(error => {
        // action creator for error in post
        dispatch({
          type: SUBSCRIPTIONS_GET_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Create subscription
// post request to create a subscription
export function create(variables) {
  // returns response to post request
  return dispatch => {
    // post request; calls mutations file in api/src/modules/subscription/mutations
    return axios.post(routeApi, mutation({
      // calls function with same name
      operation: 'subscriptionCreate',
      // passes in variables, which is the crateId
      variables,
      fields: ['id']
    }))
  }
}

// Remove subscription
// post request to remove a user's subscription
export function remove(variables) {
  // returns response to post request
  return dispatch => {
    // post request; calls mutations file in api/src/modules/subscription/mutations
    return axios.post(routeApi, mutation({
      // calls function w/same name
      operation: 'subscriptionRemove',
      // passes in variables, which is the crate id
      variables,
      fields: ['id']
    }))
  }
}
