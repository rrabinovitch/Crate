// Imports
// Imports required aspects of language
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
// Like "require" in ruby, imports the related files and the methods in them needed
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
// New user creation
// Mutations = CRUD functionality
// Will need to first set their style pref to null
// Then update it after the survey
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
// Deletes user
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
