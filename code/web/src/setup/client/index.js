// Imports
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

// App Imports
import { store } from '../../setup/store'
import { setUser, loginSetUserLocalStorageAndCookie } from '../../modules/user/api/actions'
import ScrollToTop from '../../modules/common/ScrollToTop'
import App from './App'

// User Authentication
// checks if a user is logged in
// token is set locally when a user logs in
const token = window.localStorage.getItem('token')
// if there is a token and it's a valid string
if (token && token !== 'undefined' && token !== '') {
  // retrieves the user info from local storage
  const user = JSON.parse(window.localStorage.getItem('user'))
  // if there is a valid user
  if (user) {
    // Dispatch action
    // sets user token info for axios - info always included header of requests when logged in?
    store.dispatch(setUser(token, user))
    // sets token and user info in local storage
    loginSetUserLocalStorageAndCookie(token, user)
  }
}

// Client App
// sets up redux store and browser for app
const Client = () => (
  <Provider store={store} key="provider">
    <Router>
      <ScrollToTop>
        <App/>
      </ScrollToTop>
    </Router>
  </Provider>
)

// Mount client app
// onload it's loading HTML content from the ReactDOM server
// implementing structure from client defined above
window.onload = () => {
  hydrate(
    <Client/>,
    document.getElementById('app')
  )
}
