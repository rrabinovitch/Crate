// App Imports
import Detail from '../../modules/product/Detail'

// Product routes
// route to display each individual products information - not currently working
export default {
  product: {
    path: (slug = ':slug') => (`/product/${ slug }`),
    component: Detail
  }
}
