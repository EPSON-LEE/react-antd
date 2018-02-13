import { createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';
import state from './reducers'

let store = createStore(
  state,
  // applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store