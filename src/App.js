import React, { Component } from 'react'
import './App.css'
import 'tachyons'
import Header from './components/Header'
import Products from './components/Products'
import ProductInfo from './components/ProductInfo'
import Admin from './components/Admin'
import AdminLogin from './components/AdminLogin'
import Cart from './components/Cart'
import { ApolloProvider } from "react-apollo"
// import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom"

import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import gql from 'graphql-tag'

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

const typeDefs = `
type CartItem {
  _id: String
  quantity: Int
}

type Query {
  cart: [CartItem]
}

type Mutation {
  addToCart(_id: String): CartItem
}
`

const resolvers = {
  Mutation: {
    addToCart: (_, {_id}, {cache, getCacheKey}) => {
      const query = gql`
      {
        cart @client {
          _id
          quantity
        }
      }
      `
      const previous = cache.readQuery({ query })
      const ids = previous.cart.map(({_id}) => _id)

      if (ids.includes(_id)) {
        const newArray = previous.cart.map((item) => {
          if (item._id === _id) {
            return {...item, ...{quantity: item.quantity++}}
          } else {
            return item
          }
        })
        cache.writeData({data: {cart: newArray}})
        return null
      } else {
        const newItem = {
          _id,
          quantity: 1,
          __typename: 'ItemInCart'
        }
        cache.writeData({data: {cart: previous.cart.concat([newItem])}})
        return null
      }
    }
  }
}

const cache = new InMemoryCache()
const stateLink = withClientState({
  cache,
  defaults,
  resolvers,
  typeDefs
})

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, authLink.concat(httpLink)]),
  cache
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>

        <Router>
          <div className="sans-serif dark-gray">
            <Header/>

            <div className="ph6-ns ph3 pt5">
              <Route path="/" exact component={Products}/>
              <Route path="/productdetail/:_id" exact component={ProductInfo}/>
              <Route path="/admin" exact component={Admin}/>
              <Route path="/admin/login" exact component={AdminLogin}/>
              <Route path="/cart" exact component={Cart}/>
            </div>

          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
