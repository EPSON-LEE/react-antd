import React from 'react';
import ReactDOM from 'react-dom';

export default class CalcultePrice extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      price: 0,
      amount:0,
      total: 0
    }
    this.getPrice = this.getPrice.bind(this)
    this.getAmount = this.getAmount.bind(this)
    this.submit = this.submit.bind(this)
  }

  getPrice(e) {
    this.setState({price: e.target.value})
  }

  getAmount(e) {
    this.setState({amount: e.target.value})
  }

  submit() {
    console.log(this.state.price * this.state.amount)
  }

  render() {
    return (
      <div>
        <p>price: <input type="text" onChange={this.getPrice}/></p>
        <p>amount: <input type="text" onChange={this.getAmount}/></p>
        <p>total:{ this.state.price * this.state.amount }</p>
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
}