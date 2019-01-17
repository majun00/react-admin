import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { main as mainConfig } from './router/index'
import { RenderRoutes } from './router/utils'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      // <Router routes={mainConfig}>
      <Router>
        <div className="App">
          <RenderRoutes routes={mainConfig} test="a" />
        </div>
      </Router>
    )
  }
}

export default App
