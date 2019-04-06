import React, { Component } from 'react'
import '../index.scss'

class App extends Component {
  state = { count: 0, arr: null }

  componentDidMount = () => {
    this.setState({ arr: [1, 2, 4, 5, 6] })
  }

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
        <div>
          {arr.map(v => (
            <p>{v}</p>
          ))}
        </div>
      </div>
    )
  }
}
export default App
