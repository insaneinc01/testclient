import React, { Component } from 'react'
import './App.css'
import 'tachyons'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="sans-serif dark-gray">
        <Header/>
      </div>
    );
  }
}

export default App;
