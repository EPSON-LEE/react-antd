import store from './store'
// import { createAction } from 'redux-actions'
import axios from 'axios'
import {
  OPEN_MODAL,
  SHUTDOWN_MODAL,
  CHANGE_STATE_A,
  CHANGE_STATE_B,
  INVALIDATE_ADDRESS,ERROR,
  RECEIVE_POSTS,
  REQUEST_POSTS,GET_LIST,
  ADD_LIST,
  MODIFY_LIST,
  DELETE_LIST,
  SEARCH_LIST,
  REQUEST_MESSAGE,
  FETCH_MESSAGE
} from './actionType'

// const store=crea

// popUp
export let openModal = () => {
  return {
    type: OPEN_MODAL,
    modalStatus: true
  }
}

export let shutModal = () => {
  return {
    type: SHUTDOWN_MODAL,
    modalStatus: false
  }
}

export let changeStateA = (text) => {
  return {
    type: CHANGE_STATE_A,
    value: text
  }
}

// 等待
export let requestPosts = () => {
  return {
    type: REQUEST_POSTS,
    success: false
  }
}

// 无效页面
export let invalidAdress = () => {
  return {
    type:INVALIDATE_ADDRESS,
    success: false
  }
}

// 成功
export let receiveData = () => {
  return {
    type: RECEIVE_POSTS,
    success: true
  }
}

// 失败
export let error = () => {
  return {
    type: ERROR,
    success: false
  }
}

// 发送请求
export function getList() {
  return {
    type: REQUEST_MESSAGE,
    payload: {
      data: axios({
        method:'get',
        url: 'https://cnodejs.org/api/v1/topics'
    }).then(function(res){
        return res.data;
    })
    }
  }
}

// 
// const fetchSuccess = createAction(FETCH_MESSAGE.fetchSuccess)

// thunk