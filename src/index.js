import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import { counter, INCREMENT, DECREMENT } from './components/redux'

const store = createStore(counter)
// store.subscribe()
store.dispatch({ type: INCREMENT })

ReactDOM.render(
  <App count={store.getState()} dispatch={store.dispatch} />,
  document.getElementById('root')
)
