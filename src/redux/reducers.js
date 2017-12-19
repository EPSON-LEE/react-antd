import { combineReducers } from 'redux'
import { OPEN_MODAL, SHUTDOWN_MODAL, CHANGE_STATE_A} from './actionType'

let initialState = {
  modalStatus: false
}

let initialTestState = {
  text: "初始展示"
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
        text: action.value
      }
    default:
      return state
  }
}

// 合并状态树
let modal = combineReducers({
  modalStatus,
  testState
})

export default modal