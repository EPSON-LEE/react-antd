import React from 'react'
import PropTypes from 'prop-types';
import { Button, Input } from 'antd'
import Slider from './components/slider'
import './index.css'

export default class Test extends React.Component{
  state = {
    // 可编辑输入框
    showOrEdit: true,
    inputValue: '',
    // 可编辑下拉框
    storeName: '未设定',
    showOrsearch: true,
    dataSource: [1,2,3,4,5,6,7,8,9,10,11,12,13],
  };
  // 可编辑输入框
  componentDidUpdate() {
    if(this.textInput) {
      this.textInput.focus();
    }
    // if(this.selectInput) {
    //   this.selectInput.focus();
    // }
  }
  changeTextEditable = () => {
    this.setState({
      showOrEdit: false
    })
  }
  handleBlur = () => {
    this.setState({
      showOrEdit: true
    })
  }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleKeyBoard = (e) => {
    console.log(e.keyCode)
    if (e.keyCode === 13) {
      this.setState({
        showOrEdit: true
      })
    }
  }
  // 可编辑下拉框
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
    // 拿到数据
  }
  select = (x) => {
    console.log(x)
    this.setState({storeName: x, showOrsearch:true})
  }
  render() {
    return (
    <div>
      {/* 滑框 */}
      <div className='wrapper'>
        <Slider/>
      </div>
      { /* 输入编辑框 */ }
      <div className='wrapper'>
        <span>设置人员：</span>
        {this.state.showOrEdit ?
          <span className='text' onClick={this.changeTextEditable}>{this.state.inputValue}</span>:
          <Input
            ref={(input) => { this.textInput = input}} 
            placeholder='请输入内容' className='text-input'
            defaultValue={this.state.inputValue}
            onBlur={this.handleBlur} onChange={this.handleChange}
            onKeyUp={this.handleKeyBoard}/>
        }
      </div>
      {/* 下拉框编辑 */}
      <div className='wrapper'>
        {this.state.showOrsearch ?
          <span className='name-box' onClick={this.switchStatus}>{this.state.storeName}</span>:
          <Input
            defaultValue={this.state.storeName}
            ref={(input) => { this.selectInput = input}} 
            className='name-input'
            placeholder='设置负责人'
            onBlur={this.onBlur}
            onChange={this.handleInputChange}
          />
        }
        {
        !this.state.showOrsearch ?
        <ul className='name-repo'>
          {this.state.dataSource.map(x => (<li className='item' onClick={() => this.select(x)} key={x}>{x}</li>))}
        </ul>: []}
      </div>
    </div>
    );
  }
};