import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

const httpLink = createHttpLink({ uri: 'http://localhost:4000/graphql' });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("TestApp.token");
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
});

const defaults = {
  cart: [],
}
const cache = new InMemoryCache()
const stateLink = withClientState({
  cache,
  defaults,
  resolvers,
  typeDefs
})

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([stateLink, authLink.concat(httpLink)]),
  cache
});
