// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const CRATES_GET_LIST_REQUEST = 'CRATES/GET_LIST_REQUEST'
export const CRATES_GET_LIST_RESPONSE = 'CRATES/GET_LIST_RESPONSE'
export const CRATES_GET_LIST_FAILURE = 'CRATES/GET_LIST_FAILURE'
export const CRATES_GET_REQUEST = 'CRATES/GET_REQUEST'
export const CRATES_GET_RESPONSE = 'CRATES/GET_RESPONSE'
export const CRATES_GET_FAILURE = 'CRATES/GET_FAILURE'

// Actions

// Get list of crates available to subscribe to
export function getList(orderBy = 'DESC', isLoading = true) {
  // action creator - states that request is loading
  return dispatch => {
    dispatch({
      type: CRATES_GET_LIST_REQUEST,
      error: null,
      isLoading
    })

    // post request to get all possible crates for subscription from api
    return axios.post(routeApi, query({
      operation: 'crates',
      variables: { orderBy },
      fields: ['id', 'name', 'description', 'createdAt', 'updatedAt']
    }))
    // retrieved response from request
      .then(response => {
        // if status is 200, calls action creator that will push the retrieved data into the redux store and stop the loading message
        if (response.status === 200) {
          dispatch({
            type: CRATES_GET_LIST_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.crates
          })
          // if status is other than 200, logs the response to the console
        } else {
          console.error(response)
        }
      })
      // if there is an error with the post request, calls an action creator that pushes an error message into store
      .catch(error => {
        dispatch({
          type: CRATES_GET_LIST_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single crate based on end of url
export function get(slug, isLoading = true) {
  // action creator to set isLoading
  return dispatch => {
    dispatch({
      type: CRATES_GET_REQUEST,
      isLoading
    })

    // post request that retrieves a crates information
    return axios.post(routeApi, query({
      operation: 'crate',
      variables: { slug },
      fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt']
    }))
    // on response, calls and action creator that changes isLoading to false and pushes that crates data into the store
      .then(response => {
        dispatch({
          type: CRATES_GET_RESPONSE,
          error: null,
          isLoading: false,
          item: response.data.data.crate
        })
      })
      // if there is an error with the request, calls an action creator that adds an error message into the redux store
      .catch(error => {
        dispatch({
          type: CRATES_GET_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single crate by Id
// gets a specific crate information using the crates id
export function getById(crateId) {
  return dispatch => {
    return axios.post(routeApi, query({
      operation: 'crateById',
      variables: { crateId },
      fields: ['id', 'name', 'description']
    }))
  }
}

// Create or update crate
// if the id for the crate exists, calls update function, else calls create function
export function createOrUpdate(crate) {
  if (crate.id > 0) {
    return update(crate)
  } else {
    delete crate.id
    return create(crate)
  }
}

// Create crate
// calls a post request to create a crate, passing in any variables and creating an id field
export function create(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateCreate',
      variables,
      fields: ['id']
    }))
  }
}

// Update crate
// calls a post request that passes in the crate with the specified changes to update the crate in the api
export function update(crate) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateUpdate',
      variables: crate,
      fields: ['id']
    }))
  }
}

// Remove crate
// calls a post request that removes the crate from the api
export function remove(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateRemove',
      variables,
      fields: ['id']
    }))
  }
}
