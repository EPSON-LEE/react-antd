// LOADING状态
export const LOADING_STATUS = 'LOADING_STATUS'
// popUp
export const OPEN_MODAL = 'OPEN_MODAL'
export const SHUTDOWN_MODAL = 'SHUTDOWN_MODAL'
export const CHANGE_STATE_A = 'CHANGE_STATE_A'
export const CHANGE_STATE_B = 'CHANGE_STATE_B'

// list
export const ERROR = 'ERROR'
export const INVALIDATE_ADDRESS = 'INVALIDATE_ADDRESS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_LIST = 'GET_LIST'
export const ADD_LIST = 'ADD_LIST'
export const MODIFY_LIST = 'MODIFY_LIST'
export const DELETE_LIST = 'DELETE_LIST'
export const SEARCH_LIST = 'SEARCH_LIST'
export const REQUEST_MESSAGE = 'REQUEST_MESSAGE'

// 网络部分
export const FETCH_MESSAGE = {
  REQUEST: 'REQUEST_MESSAGE',
  SUCCESS: 'FETCH_SUCCESS',
  FAILURE: 'FETCH_FAILURE'
}


function tessClosure() {
  var a = 10
  return function(b) {
    console.log(a, b)
  }
}