import React from 'react';
import { Tree, Button } from 'antd';
import Input from 'antd/lib/input/Input';
import './index.css'

export default class EditAble extends React.Component {
  constructor() {
    super()
    this.state = {
      editStatus: false
    }
  }

  /**
   * 组件更新时触发
   */
  componentDidUpdate () {
    if (this.input) {
      this.input.focus()
    }
  }

  /**
   * 失焦
   */
  handleBlur = () => {
    this.setState({
      editStatus: false
    })
  }

 /**
  * 点击编辑
  */
  handleEdit = () => {
    this.setState({
      editStatus: true
    })
  }

  /**
   * 点击回车， 确认输入
   */
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        editStatus: false
      })
    }
  }

  render() {
    return (
      this.state.editStatus ?
      <Input
        placeholder='请输入节点名称'
        defaultValue={this.props.value}
        ref={(input) => this.input = input}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown} />:
      <span
        className='treeNode'>
        {this.props.value}
        <i className='del'/>
        <i className='copy'/>
        <i onClick={this.handleEdit} className='edit'/>
        <i className='add' />
      </span>      
    )
  }
}