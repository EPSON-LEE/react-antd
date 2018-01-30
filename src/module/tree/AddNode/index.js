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
   * 点击增加按钮
   */
  handleAdd = (e) => {
    // 遍历结点， 找到id为this.props.selectedKeys的节点，push一个孩子节点， selectedKeys设置孩子节点ID，state.editStatus设置为true
    
    var data = this.props.gData
    var selectedKeys = this.props.selectedKeys
    this.findNode(data, selectedKeys)
    this.props.setStateInChild(this.props.gData)
  }

  /**
   * 递归找节点
   */
  findNode = (data, selectedKeys) => {
    for (let i = 0; i<data.length; i++) {
      if (data[i].key + '' === selectedKeys[0]) {
        if (data[i].children) {
          // 发送请求
          data[i].children.push({
            id: 'newItem' + Date.parse(new Date),
            key: 'newItem' + Date.parse(new Date),
            editable: true
          })
        } else {
          // 发送请求
          data[i].children = []
          data[i].children.push({
            id: 'newItem' + Date.parse(new Date),
            key: 'newItem' + Date.parse(new Date),
            editable: true
          })
        }
        break
      }
      if (data[i].children) {
        this.findNode(data[i].children, selectedKeys)
      }
    }
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
        <i className='edit'  onClick={this.handleEdit}/>
        <i className='add'  onClick={this.handleAdd} />
      </span>      
    )
  }
}