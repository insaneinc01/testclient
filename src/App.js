import React, { Component } from 'react'
import './App.css'
import 'tachyons'
import Header from './components/Header'
import Products from './components/Products'
import ProductInfo from './components/ProductInfo'
import Admin from './components/Admin'
import AdminLogin from './components/AdminLogin'
import { ApolloProvider } from "react-apollo"
// import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom"

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

// const client = new ApolloClient({uri: "http://localhost:4000/graphql"})

const httpLink = createHttpLink({ uri: 'http://localhost:4000/graphql' });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("TestApp.token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
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
            </div>

          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
