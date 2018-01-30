import axios from 'axios'
import { OPEN_MODAL, SHUTDOWN_MODAL, CHANGE_STATE_A,CHANGE_STATE_B,INVALIDATE_ADDRESS,ERROR,        RECEIVE_POSTS,REQUEST_POSTS,GET_LIST,  ADD_LIST, MODIFY_LIST, DELETE_LIST, SEARCH_LIST 
} from './actionType'

// popUp
export function openModal() {
  return {
    type: OPEN_MODAL,
    modalStatus: true
  }
}

export function shutModal() {
  return {
    type: SHUTDOWN_MODAL,
    modalStatus: false
  }
}

export function changeStateA(text) {
  return {
    type: CHANGE_STATE_A,
    value: text
  }
}

// 等待
function requestPosts() {
  return {
    type: REQUEST_POSTS,
    success: false
  }
}

// 无效页面
export function invalidAdress() {
  return {
    type:INVALIDATE_ADDRESS,
    success: false
  }
}

// 成功
function receiveData() {
  return {
    type: RECEIVE_POSTS,
    success: true
  }
}

// 失败
function error() {
  return {
    type: ERROR,
    success: false
  }
}

// redux-thunk
export function getList() {
  return (function (dispatch) {
    dispatch(requestPosts())
    return axios.get(`http://localhost:3001/articles`).then(
      Response =>Response
      // err => dispatch(error())
    ).then(Response =>dispatch(receiveData()))
  }())
}

// export function getList() {
//   return function(dispatch) {
//     return axios.get(`http://localhost:3001/articles`)
//     .then(json => {
//       console.log(json)
//       dispatch(shouldGet())
//     })
//   }
// }