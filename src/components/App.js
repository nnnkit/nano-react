import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './../index.scss'

class App extends Component {
  state = { count: 0 }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
      </div>
    )
  }
}

export default hot(module)(App)
