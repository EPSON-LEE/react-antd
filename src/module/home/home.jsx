import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'antd';
import './index.css'

const list = [
  1,2,3,4
]

export default class CalcultePrice extends React.Component {

  constructor(props){

    super(props)
    this.state = {
      price: '',
      amount: '',
      total: 0
    }
  }

  transform = (e) => {
  }

  getPrice = (e) =>{
    // 输入检测，判断是否为数字
    if(isNaN(e.target.value)) {
      alert('请输入数字')
    }else{
      // 限制输入长度
      this.setState({'price': e.target.value.substr(0,5)})
    }
  }

  getAmount = (e) => {
    if(isNaN(e.target.value)) {
      alert('请输入正整数')
    }else{
      // 限制输入长度
      this.setState({'amount': e.target.value.substr(0,5)})
    }
  }

  submit = (e) => {
    console.log(this.state.price * this.state.amount)
  }

  handleClick = (item, e) => {
    console.log(item, e.target)
  }

  // 循环中绑定事件的方法
  renderlist = () => {
    let listLocal = list || []
    return listLocal.map((item) => {
      return (
        <h1
        key={item}
        onClick={ (e) => this.handleClick(item, e)}>
          {item}
      </h1>
      )
    })
  }

  render() {
    return (
     <div className="card">
        <h1 className="title">{this.props.title}</h1>
        <div>
          <p><span>单价: </span><Input className="input" placeholder="请输入价格" value={this.state.price}  onChange={this.getPrice} /></p>
          <p><span>数量: </span><Input className="input" placeholder="请输入数量" value={this.state.amount} onChange={this.getAmount} /></p>
          <p><span>测试：</span><Input className="input" placeholder="请输入文字" onChange={this.transform} /></p>
          <p>总价:{ this.state.price * this.state.amount }</p>
        </div>
        {this.renderlist()}
     </div>
    )
  }
}