import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'antd'
import './index.css'

const testRedux = ({modalState, testState,openModal, shutModal,changeStateA}) => {
  let input
  return (
    <div>
      <span className="pop-up-control">弹窗控制</span>
      <Button type="dashed"
          onClick={e => {
            e.preventDefault()
            openModal()
          }}
      >
      打开
      </Button>
      <Button type="dashed"
        onClick={e => {
          e.preventDefault()
          shutModal()
        }}
      >
      关闭
      </Button>
      { modalState.modalStatus ? <div style={{backgroundColor:'yellow', position: 'absolute',width:'100px', height: '100px', left:'50%', top:'50%', marginLeft: '-50px', marginTop:'-50px'}}>弹窗打开了<p>{testState.text }</p></div>:<div /> }
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
        <Button type="dashed">
          Add Todo
        </Button>
      </form>
      <p>展示输入的内容: { testState.text }</p>
    </div>
  )
}

testRedux.propTypes = {
  modalState: PropTypes.object.isRequired,
  testState: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  shutModal: PropTypes.func.isRequired,
  changeStateA: PropTypes.func.isRequired
}


export default testRedux