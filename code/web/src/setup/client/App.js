// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import Layout from '../../modules/common/Layout'
import NotFound from '../../modules/common/NotFound'
import RoutePrivate from '../../modules/auth/RoutePrivate'

const App = () => (
  // displays layout component
  // uses switch for route path
  <Layout>
    <Switch>
      // iterates over every route in the routes folder
      // for each route, it checks if auth is true/false
      {Object.values(routes).map((route, index) => (
        route.auth // if true
          // creates private route that is added to the site
          ? <RoutePrivate {...route} key={index}
          // if route.path is a function, it calls a function to create the path, else it puts in the path in the object
           path={typeof route.path === 'function' ? route.path() : route.path}/>
           // if route.auth === false
          : <Route {...route} key={index}
          // if route.path is a function, it calls a function to create the path, else it puts in the path in the object
           path={typeof route.path === 'function' ? route.path() : route.path}/>
      ))}
      // if a route doesn't exist, redirects to NotFound component
      <Route component={NotFound}/>
    </Switch>
  </Layout>
)

export default App
