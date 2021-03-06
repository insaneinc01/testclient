import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

const httpLink = createHttpLink({ uri: 'http://localhost:4000/graphql' });

//this is to the jwt token on each server call - to authorise admin permission in this app
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("TestApp.token");
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
});

// setup Apollo cache managed local state instead of Redux!
const defaults = {
  cart: [],
}
const cache = new InMemoryCache()
const stateLink = withClientState({
  cache,
  defaults, //default state
  resolvers, //graphql-like mutation for updating local state
  typeDefs //graphql-like definitions for state management
})

//finally composing localstate, authorization and graphql endpoint into a single chain
export const apolloClient = new ApolloClient({
  link: ApolloLink.from([stateLink, authLink.concat(httpLink)]),
  cache
});
