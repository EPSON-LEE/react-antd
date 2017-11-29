const OPEN_MODAL = 'OPEN_MODAL'
const SHUTDOWN_MODAL = 'SHUTDOWN_MODAL'
const CHANGE_STATE_A = 'CHANGE_STATE_A'

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