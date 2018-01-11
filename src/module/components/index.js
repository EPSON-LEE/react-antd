import React from 'react'
import PropTypes from 'prop-types';
import { Button, Input, Collapse } from 'antd'
import Slider from './components/slider'
import './index.css'
const Panel = Collapse.Panel

export default class Test extends React.Component{
  state = {
    // 可编辑输入框
    showOrEdit: true,
    inputValue: '',
    // 可编辑下拉框
    storeName: '未设定',
    showOrsearch: true,
    dataSource: ['000001','000002','000003','000004','000005','000006','000007','000008','000009','000010','000011','000012','000013'],
    // 下拉列表
  };
  // 可编辑输入框
  componentDidUpdate() {
    if(this.textInput) {
      this.textInput.focus();
    }
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
      { /* 手风琴 关联特性列表 */ }
      <Collapse style={{width: 450}} defaultActiveKey={['1']}>
        <Panel header={this.state.showOrEdit + '空格  '  +' 归属项目'} key="1">
          <div>
            <header>#8320642</header>
            <content>切图</content>
            <footer>
              <span>2018-01-09</span><span>2018-02-09</span><span>林水财</span><span>预估工时：16</span><span>抄送人</span><span>已下单</span><span>未开始</span>
            </footer>
          </div>
        </Panel>
      </Collapse>
    </div>
    );
  }
};