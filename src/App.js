import React from 'react'
import './App.css'
import 'tachyons'
import Header from './components/Header'
import Products from './components/Products'
import ProductInfo from './components/ProductInfo'
import Admin from './components/Admin'
import AdminLogin from './components/AdminLogin'
import Cart from './components/Cart'

import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { apolloClient } from './apollo/apolloClient'


class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>

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
