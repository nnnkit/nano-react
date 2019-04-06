import React, { Component } from 'react'
import '../index.scss'

class App extends Component {
  state = { count: 0 }

  render() {
    const { count, arr } = this.state
    return (
      <div>
        <div>{count}</div>
        <button
          type="button"
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
      </div>
    )
  }
}
export default App
