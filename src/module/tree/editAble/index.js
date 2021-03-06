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
    this.props.setExpandedKeysInChild(selectedKeys)
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
            id: 'newItem' + Date.parse(new Date()),
            key: new Date() + '新建节点' ,
            editable: true
          })
        } else {
          // 发送请求
          data[i].children = []
          data[i].children.push({
            id: 'newItem' + Date.parse(new Date()),
            key: new Date() + '新建节点' ,
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
   * 编辑项里面的点击回车确认编辑
   */
  handleKeyDown = async (e) => {
    var data = this.props.gData
    var selectedKeys = this.props.selectedKeys
    if (e.keyCode === 13) {
      // 更新父节点state之后就可以直接刷新这个组件（重新进入该组件）
      await this.operateEditNode(data, selectedKeys, e.target.value)
      await this.props.setStateInChild(data)
    }
    // 找节点 把树节点、 选中节点 、e.target.value传进去
  }

  operateEditNode = (data, selectedKeys, value) => {
    for (let i = 0; i<data.length; i++) {
      if (data[i].key + '' === selectedKeys[0]) {
        data[i].key = value
        break
      }
      if (data[i].children) {
        this.operateEditNode(data[i].children, selectedKeys,value)
      }
    }
  }

  /**
   * 删除节点
   */
  deleteNode = async () => {
    var data = this.props.gData
    var selectedKeys = this.props.selectedKeys
    await this.operateDelNode(data, selectedKeys)
    await this.props.setStateInChild(data)
    console.error(data)
  }

  operateDelNode = (data, selectedKeys) => {
    for (let i = 0; i<data.length; i++) {
      if (data[i].key + '' === selectedKeys[0]) {
        console.log(data[i])
        data.splice(i, 1)
        break
      }
      // 去除数组中的empty元素
      if (data[i].children) {
        this.operateDelNode(data[i].children, selectedKeys)
      }
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
        <i className='del' onClick={this.deleteNode}/>
        <i className='copy'/>
        <i className='edit'  onClick={this.handleEdit}/>
        <i className='add'  onClick={this.handleAdd} />
      </span>      
    )
  }
}