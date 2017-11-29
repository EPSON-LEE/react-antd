import { combineReducers } from 'redux'
import { OPEN_MODAL, SHUTDOWN_MODAL, CHANGE_STATE_A, CHANGE_STATE_B} from './actionType'


let initialState = {
  modalStatus: "初始化"
}

let initialTestState = {
  a:1,
  b:2
}

function modalStatus(state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalStatus: action.modalStatus
      }
    case SHUTDOWN_MODAL:
      return {
        ...state,
        modalStatus: action.modalStatus
      }
    default:
      return state
  }
}



function testState(state = initialTestState, action) {
  switch(action.type) {
    case CHANGE_STATE_A:
      return {
        ...state,
        a:action.a
      }
    case CHANGE_STATE_B:
      return {
        ...state,
        b:action.b
      }
    default:
      return state
  }
}

let modal = combineReducers({
  modalStatus,
  testState
})


export default modal