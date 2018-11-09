import React, { Component } from 'react'
import './App.css'
import 'tachyons'
import Header from './components/Header'
import Products from './components/Products'
import ProductInfo from './components/ProductInfo'
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom"

const client = new ApolloClient({uri: "http://localhost:4000/graphql"})

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
            </div>

          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
