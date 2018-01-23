import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'antd';
import Rater from '../../components/rate'
import './index.css'

export default class CalcultePrice extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      price: '',
      amount: '',
      total: 0
    }
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
    // 输入检测，判断是否为数字
    if(isNaN(e.target.value)) {
      alert('请输入正整数')
    }else{
      // 限制输入长度
      this.setState({'amount': e.target.value})
    }
  }

  submit = (e) => {
    console.log(this.state.price * this.state.amount)
  }

  componentDidMount() {
  }

  render() {
    console.error(this.state)
    return (
     <div className="card">
        <h1 className="title">{this.props.title}</h1>
        <div>
          <p><span>单价: </span><Input className="input" placeholder="请输入价格" value={this.state.price}  onChange={this.getPrice} /></p>
          <p><span>数量: </span><Input disabled className="input" placeholder="请输入数量" onChange={this.getAmount} /></p>
          <p>总价:{ this.state.price * this.state.amount }</p>
        </div>
        <Rater/>
     </div>
    )
  }
}