// App Imports
import List from '../../modules/crate/List'

// Crate routes
// takes user to subscriptions they can register for
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true
  }
}
