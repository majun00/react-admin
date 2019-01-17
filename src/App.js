import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { main as mainConfig } from './router/index'
import { RenderRoutes } from './router/utils'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { allReducer } from '@/reducer/reduxs'

import './App.css'

const store = createStore(allReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <RenderRoutes routes={mainConfig}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
