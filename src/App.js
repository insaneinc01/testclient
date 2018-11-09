import React, { Component } from 'react'
import './App.css'
import 'tachyons'
import Header from './components/Header'
import Products from './components/Products'
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost";

const client = new ApolloClient({uri: "http://localhost:4000/graphql"})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="sans-serif dark-gray">
          <Header/>

          <div className="ph6-ns ph3 debug pt5">
            <Products/>
          </div>

        </div>
      </ApolloProvider>
    );
  }
}

export default App;
