// Imports
import { GraphQLSchema } from 'graphql'

// App Imports
import query from './queries'
import mutation from './mutations'

// Schema (graphQL schema, not db schema)
const schema = new GraphQLSchema({
  query,
  mutation
})

export default schema
