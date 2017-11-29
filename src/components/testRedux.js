import React from 'react'
import PropTypes from 'prop-types';

const testRedux = ({modalStatus, openModal, shutModal,changeStateA,changeStateB}) => {
  let input
  return (
    <div>
      <button href="#"
          onClick={e => {
            e.preventDefault()
            openModal()
          }}
      >
      打开
      </button>
      <button href="#"
        onClick={e => {
          e.preventDefault()
          shutModal()
        }}
      >
      关闭
      </button>

      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        changeStateA(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

testRedux.propTypes = {
  modalStatus: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  shutModal: PropTypes.func.isRequired,
  changeStateA: PropTypes.func.isRequired,
  changeStateB: PropTypes.func.isRequired
}

export default testRedux