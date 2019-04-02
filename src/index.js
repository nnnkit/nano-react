import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './components/App'

const a = 21
console.log(a)
ReactDOM.render(<App />, document.getElementById('root'))
