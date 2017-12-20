import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'antd/lib/button';
import '.././module/home/index.css'

export default class CalcultePrice extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      price: 0,
      amount:0,
      total: 0
    }
  }

  getPrice = (e) =>{
    if(isNaN(e.target.value)) {
      alert('请输入数字')
    }else{
      this.setState({'price': e.target.value.substr(0,5)})
    }
  }

  getAmount = (e) => {
    if(isNaN(e.target.value)) {
      alert('请输入正整数')
    }else{
      this.setState({'amount': e.target.value.substr(0,5)})
    }
  }

  submit = (e) => {
    console.log(this.state.price * this.state.amount)
  }

  render() {
    return (
     <div className="card">
        <h1>实时计算价格</h1>
        <div>
          <p><span className="column">单价:</span><input placeholder="请输入价格" value={this.state.price}  onChange={this.getPrice} /></p>
          <p><span className="column">数量:</span><input placeholder="请输入数量" value={this.state.amount} onChange={this.getAmount} /></p>
          <p className="totalPrice">总价:{ this.state.price * this.state.amount }</p>
        </div>
     </div>
    )
  }
}