// App Imports
import List from '../../modules/crate/List'
import Survey from '../../modules/survey/Survey'

// Crate routes
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true
  },
  survey: {
    path: '/style-preferences',
    component: Survey,
    auth: true
  }

}
