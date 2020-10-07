// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { create, remove } from './resolvers'

// Subscription create
// creates a new subscription for user
export const subscriptionCreate = {
  // specifies format
  type: SubscriptionType,
  // variables passed in
  args: {
    crateId: {
      // gives variable a key
      name: 'crateId',
      // makes sure id is in the correct format
      type: GraphQLInt
    }
  },
  // calls create function in resolvers.js
  resolve: create
}

// Subscription remove
// removes subscription for a user
export const subscriptionRemove = {
  // specifies format
  type: SubscriptionType,
  args: {
    id: {
      // gives variables a key and a value in the correct format
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
