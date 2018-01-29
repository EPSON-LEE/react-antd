import React from 'react';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

export default class Demo extends React.Component {
  state = {
    treeData: [
      { title: 'Expand to load', key: '0' },
      { title: 'Expand to load', key: '1' },
      { title: 'Expand to load', key: '2', isLeaf: true }
    ],
    selectedKeys: ['0']
  }
  onLoadData = (treeNode) => {
    // 发送点击时的请求
    // 数据格式化将id pid转换为 树状结构
    // 然后执行  treeNode.props.dataRef.children = children
    return new Promise((resolve) => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
          { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
        ];
        this.setState({
          treeData: [...this.state.treeData],
        });
        resolve();
      }, 1000);
    });
  }
  addData = (treeNode) => {
    console.error(treeNode)
    treeNode.props.dataRef.children.push({
      title: 'fsdaf', key: 'sdfdssa',
    })
    this.setState({
      treeData: [...this.state.treeData]
    })
  }
  // selectedKeys, e:{selected: bool, selectedNodes, node, event}
  handleSelect = (selectedKeys, e) => {
    console.log(selectedKeys)
    console.log(e)
    e.selected=true
    this.setState({
      selectedKeys: selectedKeys
    })
  }
  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} dataRef={item} />;
    });
  }
  render() {
    return (
      <Tree
      showLine
      onSelect={this.handleSelect}
      selectedKeys={this.state.selectedKeys}
      loadData={this.onLoadData}>
        {this.renderTreeNodes(this.state.treeData)}
      </Tree>
    );
  }
}