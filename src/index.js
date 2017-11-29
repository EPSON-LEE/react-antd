import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import modal from './redux/reducers'
import Routes from './router'

let store = createStore(modal)

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)