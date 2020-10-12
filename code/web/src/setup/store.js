// Imports
import { compose, combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// App Imports
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'
import * as product from '../modules/product/api/state'
import * as subscription from '../modules/subscription/api/state'
import * as crate from '../modules/crate/api/state'

// App Reducer
// below combines all reducers to create the redux store; all data in individual reducers is added to this object.
const appReducer = combineReducers({
  common,
  user,
  ...product,
  ...subscription,
  ...crate
})

// Root Reducer
// if the action type is reset, it'll clear the store, otherwise it'll display the store as created in appReducer
export const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return appReducer(state, action)
}

// Load initial state from server side
let initialState
if (typeof window !== 'undefined') {
  initialState = window.__INITIAL_STATE__
  delete window.__INITIAL_STATE__
}

// Store
// creates the store to be used throughout the app
export const store = createStore(
  rootReducer,
  initialState,

  composeWithDevTools(
    applyMiddleware(thunk),
  )
)
