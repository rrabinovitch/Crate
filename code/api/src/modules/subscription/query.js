// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { getAll, getByUser, get } from './resolvers'

// Subscriptions All
// what gets called when user wants to get all subscriptions
export const subscriptions = {
  // puts data posted into the correct format/data types
  type: new GraphQLList(SubscriptionType),
  // calls getAll function in resolvers.js
  resolve: getAll
}

// Subscriptions by user
// what gets called when user gets their subscriptions
export const subscriptionsByUser = {
  // puts data posted into the correct format/data types
  type: new GraphQLList(SubscriptionType),
  // calls getByUser in resolvers.js
  resolve: getByUser
}

// Subscription By id
// returns single subscription by id
export const subscription = {
  // subscription should already be formatted correctly
  type: SubscriptionType,
  // passes in the id from the slug in the post request
  args: {
    id: { type: GraphQLInt }
  },
  // calls get from resolvers.js
  resolve: get
}
