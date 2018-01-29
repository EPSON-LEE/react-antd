import React from 'react'
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import { Input } from 'antd'
import QueueAnim from 'rc-queue-anim';
import './index.css'

export default class editableSelect extends React.Component{
  state = {
    storeName: '未设定',
    showOrsearch: true,
    dataSource: [1,2,3,4,5,6,7,8,9,10,11,12,13],
  };
  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  switchStatus = () => {
    this.setState({
      showOrsearch: false
    })
  }
  onBlur = () => {
    this.setState({
      showOrsearch: true
    })
  }
  handleInputChange = () => {
    // 发请求
  }
  select = (x) => {
    alert(1)
    console.log(x)
    this.setState({storeName: x, showOrsearch:true})
  }
  render() {
    return (
      <div>
        {this.state.showOrsearch ?
          <span className='name-box' onClick={this.switchStatus}>{this.state.storeName}</span>:
          <Input className='name-input' onBlur={this.onBlur} onChange={this.handleInputChange} placeholder='设置负责人'/>
        }
        {
        !this.state.showOrsearch ?
        <ul className='name-repo'>
          {this.state.dataSource.map(x => (<li className='item' onClick={() => this.select(x)} key={x}>{x}</li>))}
        </ul>: []}
      </div>
    );
  }
};