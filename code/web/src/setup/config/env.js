// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// URL
// url for the app
export const APP_URL = process.env.APP_URL
// url for the app's api
export const APP_URL_API = process.env.APP_URL_API

// Environment
// where node runs?
export const NODE_ENV = process.env.NODE_ENV

// Port
// port app runs on
export const PORT = process.env.PORT || 3000
