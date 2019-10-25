import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)