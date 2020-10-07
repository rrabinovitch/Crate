// App Imports
import * as dashboard from './dashboard'
import * as product from './product'
import * as crate from './crate'
import * as subscription from './subscription'
import * as user from './user'

// Admin routes
// adds all routes for admin access to the different pages of app
const admin = {
  ...dashboard,
  ...product,
  ...crate,
  ...subscription,
  ...user
}

export default admin
