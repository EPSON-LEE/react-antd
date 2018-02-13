import { combineReducers } from 'redux'
import { OPEN_MODAL,
         SHUTDOWN_MODAL,
         CHANGE_STATE_A,
         GET_LIST,
         REQUEST_MESSAGE
      } from './actionType'

let initialState = {
  modalStatus: false
}

let initialTestState = {
  text: "初始展示"
}

let initialList = {
  List: '空的'
}

let getList = (state = initialList,action) => {
  switch(action.type) {
    case GET_LIST:
      return {
        ...state,
        success: action
      }
    default:
      return state
  }
}

let modalStatus = (state = initialState, action) => {
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

let testState = (state = initialTestState, action) => {
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

// 网络信息
let asyncAction = (action) => {
  switch(action.type) {
    case REQUEST_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state
  }
}

// store
// 合并状态树
let state = combineReducers({
  modalStatus,
  testState,
  getList
})

export default state