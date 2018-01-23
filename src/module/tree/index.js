import React from 'react';
import { Tree } from 'antd';
import EditBox from './editAble/index'
import './index.css'
import Select from 'antd/lib/select';
const TreeNode = Tree.TreeNode;


/**
 * 生成树状的空间的结构
 */

 // 每一层树叶子节点的深度
const x = 10;
//
const y = 3;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  // Z层之内
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

export default class antdTree extends React.Component {
  state = {
    gData
  }
  handleSelect = (selectedKeys, e) => {
    console.log(e) 
  }  

  render() {
    console.log(this.state.gData)
    const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode
                key={item.key}
                title={<EditBox
                        className='color'
                        value={item.key}
                        type='parent' />
                      }>
                  {loop(item.children)}
                </TreeNode>;
      }
      return <TreeNode
              key={item.key}
              title={<EditBox
                      value={item.key}
                      type='leaf' />
                    } />;
    });
    return (
      <Tree
        showLine
        className="draggable-tree"
        onSelect={this.handleSelect}
        onDrop={this.onDrop}
      >
        {loop(this.state.gData)}
      </Tree>
    );
  }
}