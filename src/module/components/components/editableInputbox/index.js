import React from 'react'
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import { Input } from 'antd'
import './index.css'

export default class EditableInputBox extends React.Component{
  state = {
    showOrEdit: true,
    inputValue: ''
  };
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
  render() {
    return (
      <div className='wrapper'>
        {/* <Input ref={(input) => { this.textInput = input}} placeholder='请输入内容' className='text-input' defaultValue={this.state.inputValue} onBlur={this.handleBlur} onChange={this.handleChange}/> */}
        <span>设置人员：</span>
        {this.state.showOrEdit ?
          <span className='text' onClick={this.changeTextEditable}>{this.state.inputValue}</span>:
          <Input ref={(input) => { this.textInput = input}} placeholder='请输入内容' className='text-input' defaultValue={this.state.inputValue} onBlur={this.handleBlur} onChange={this.handleChange}/>
        }
      </div>
    );
  }
};