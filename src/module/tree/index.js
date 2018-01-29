import React from 'react';
import { Tree } from 'antd';
import EditBox from './editAble/index'
import './index.css'
import Select from 'antd/lib/select';
import Input from 'antd/lib/input/Input';
const TreeNode = Tree.TreeNode;


/**
 * 生成树状的空间的结构
 */

 // 每一层树叶子节点的深度
// const x = 10;
// //
// const y = 3;
// const z = 1;
// const gData = [];

// const generateData = (_level, _preKey, _tns) => {
//   const preKey = _preKey || '0';
//   const tns = _tns || gData;

//   const children = [];
//   for (let i = 0; i < x; i++) {
//     const key = `${preKey}-${i}`;
//     tns.push({ title: key, key });
//     if (i < y) {
//       children.push(key);
//     }
//   }
//   // Z层之内
//   if (_level < 0) {
//     return tns;
//   }
//   const level = _level - 1;
//   children.forEach((key, index) => {
//     tns[index].children = [];
//     return generateData(level, key, tns[index].children);
//   });
// };
// generateData(z);

const gData = [
  {
    id: 1,
    key: 1,
    title: '1-1级节点',
    editable: false,
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
    editable: false,
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
    editable: false,
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
    editable: false,
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
    selectedKeys: ['newItem']
  }
  
  handleSelect = (selectedKeys, e) => {
    if(selectedKeys.length === 0) {
      return
    }
    this.setState({
      selectedKeys: selectedKeys
    })
  }

  handleChange = (e) => {
    alert(e)
    console.log(e)
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

  handleKeyBoard = (e) => {
    // alert(e.target.value)
    // if (e.keyCode === 13) {
    //   console.error(e.target.value)
    // }
  }

  render() {
    const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode
                key={item.key}
                title={<EditBox
                        editableFlag={item.editable}
                        gData={this.state.gData}
                        setSelectedKeysInChild={this.setSelectedKeysInChild}
                        setStateInChild={this.setStateInChild}
                        selectedKeys={this.state.selectedKeys}
                        value={item.key} />
                      }>
                  {loop(item.children)}
                </TreeNode>;
      }
      return <TreeNode
              key={item.key}
              title={<EditBox
                editableFlag={item.editable}
                gData={this.state.gData}
                setSelectedKeysInChild={this.setSelectedKeysInChild}
                setStateInChild={this.setStateInChild}
                selectedKeys={this.state.selectedKeys}
                value={item.key} />
              }/>
    });
    return (
      <Tree
        showLine
        className='color'
        className="draggable-tree"
        selectedKeys={this.state.selectedKeys}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onDrop={this.onDrop}
      >
        {loop(this.state.gData)}
      </Tree>
    );
  }
}