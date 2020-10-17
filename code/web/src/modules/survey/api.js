// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'
import cookie from 'js-cookie'

// App Imports
import { routeApi } from '../../setup/routes'

// Actions Types
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST'
export const SURVEY_REQUEST = 'AUTH/SURVEY_REQUEST'
export const UPDATE_STYLE = 'AUTH/UPDATE_STYLE'

export function submitSurvey(surveyResults, id, isLoading = true) {
  return dispatch => {
    dispatch({
      type: SURVEY_REQUEST,
      isLoading
    })
    const obj = {
      id,
      style: surveyResults
    }
    return axios.post(routeApi, mutation({
      operation: 'userUpdate',
      variables: obj,
      fields: ['id', 'style']
    }))
    .then(response => {
      let error = ''
      if (response.data.errors && response.data.errors.length > 0) {
        error = response.data.errors[0].message
        console.log('error', error)
      } else {
        const style = response.data.data.userUpdate.style
        console.log('response', response)
        console.log('response.data.data.userUpdate', response.data.data.userUpdate)
        dispatch({
              type: UPDATE_STYLE,
              style
        })
      }
    })
  }
}