// App Imports
import { APP_URL_API } from '../config/env'
import admin from './admin'
import home from './home'
import user from './user'
import product from './product'
import crate from './crate'

// Combined routes
// packages all of the routes together; creates a single object w/each route
// being a new key/value pair
export const routes = Object.assign(admin, home, user, product, crate)

// API Routes
export const routeApi = APP_URL_API

// Image
export const routeImage = APP_URL_API
