import { createStore } from 'redux'
import modal from './reducers'

let store = createStore(
  modal,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store