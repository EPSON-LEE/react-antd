import React from 'react';
import { Tree } from 'antd';
import EditBox from './editAble/index'
import AddNode from './editAble/index'
import './index.css'
import Select from 'antd/lib/select';
import Input from 'antd/lib/input/Input';
const TreeNode = Tree.TreeNode


const gData = [
  {
    id: 1,
    key: 1,
    title: '1-1级节点',
    level: 1,
    children: [{
      id: 11,
      key: 11,
      title: 11,
      editable: false,
    }]
  },
  {
    id: 1,
    key: 2,
    title: '1-2级节点',
    level: 1,
    children: [{
      id: 12,
      key: 12,
      title: 11,
      editable: false,
    }]
  },
  {
    id: 1,
    key: 3,
    title: '1-3级节点',
    level: 1,
    children: [{
      id: 13,
      key: 13,
      title: 11
    }]
  },
  {
    id: 1,
    key: 4,
    title: '1-4级节点',
    level: 1,
    children: [{
      id: 14,
      key: 14,
      editable: false,
      title: 11
    }]
  },
]

/**
 * 1、进入页面后 第一遍加载出的节点均为父节点, 给每个父节点中加入children属性
 * 2、点击任一父节点，发送请求拿到数据再将数据格式化，然后加载出该父节点下的所有节点
 *  数据格式化 将ID PID的格式转换为树状格式
 */

export default class antdTree extends React.Component {
  state = {
    gData,
    // 选中的节点
    selectedKeys: ['newItem'],
    // 展开的节点
    expandedKeys: ['1']
  }
  
  /**
   * 选中某一节点触发
   */
  handleSelect = (selectedKeys, e) => {
    // 根据传过来的属性来判断是否发送请求
    if(selectedKeys.length === 0) {
      return
    }
    this.setState({
      selectedKeys: selectedKeys
    })
  }

  /**
   * 在子组件中展开指定节点
   */
  setExpandedKeysInChild = (target) => {
    this.setState({
      expandedKeys: target
    })
  }

  /**
   * 更新selectedKeys
   */
  setSelectedKeysInChild = (target) => {
    this.setState({
      selectedKeys: target
    })
  }

  /**
   * 更新state中的数据
   */
  setStateInChild = (target) => {
    this.setState({
      gData: target
    })
  }

  render() {
    const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode
                key={item.key}
                title={<EditBox
                        // 树形结构数据
                          gData={this.state.gData}
                        // 设置选中的元素  传入到子组件中
                          setSelectedKeysInChild={this.setSelectedKeysInChild}
                        // 设置展开元素 传入到子组件中
                          setExpandedKeysInChild={this.setExpandedKeysInChild}
                        // 在子组件中修改state， 用于修改树形结构
                          setStateInChild={this.setStateInChild}
                        // 选中的元素
                          selectedKeys={this.state.selectedKeys}
                        // 需要展示的内容
                          value={item.key} />
                      }>
                  {loop(item.children)}
                </TreeNode>;
      }
      return <TreeNode
              key={item.key}
              title={<EditBox
              // 树形结构数据
                gData={this.state.gData}
              // 设置选中的元素  传入到子组件中
                setSelectedKeysInChild={this.setSelectedKeysInChild}
              // 设置展开元素 传入到子组件中
                setExpandedKeysInChild={this.setExpandedKeysInChild}
              // 在子组件中修改state， 用于修改树形结构
                setStateInChild={this.setStateInChild}
              // 选中的元素
                selectedKeys={this.state.selectedKeys}
              // 需要展示的内容
                value={item.key} />
            } />
    });
    return (
      <Tree
        showLine
        className="draggable-tree"
        defaultExpandAll={true}
        autoExpandParent={true}
        selectedKeys={this.state.selectedKeys}
        onSelect={this.handleSelect}
        // expandedKeys={this.state.expandedKeys}
        onDrop={this.onDrop}
      >
        {loop(this.state.gData)}
      </Tree>
    );
  }
}