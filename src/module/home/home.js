import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'antd';
import Rater from '../../components/rate'
import pinyin from 'pinyin'
import './index.css'

export default class CalcultePrice extends React.Component {

  constructor(props){
    console.log(pinyin('中心').toString())
    console.log(pinyin("中心", {
      style: pinyin.STYLE_INITIALS, // 设置拼音风格
      heteronym: true
    }).toString());

    super(props)
    this.state = {
      price: '',
      amount: '',
      total: 0
    }
  }

  transform = (e) => {
    console.log(e.target.value)
    console.log(pinyin(e.target.value, {
      style: pinyin.STYLE_INITIALS, // 设置拼音风格
      heteronym: true
    }).toString().split(','));

    console.log(pinyin(e.target.value).toString())
    console.log(pinyin('中心').toString())
    console.log(pinyin("中心", {
      style: pinyin.STYLE_INITIALS, // 设置拼音风格
      heteronym: true
    }).toString());

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
      this.setState({'amount': e.target.value.substr(0,5)})
    }
  }

  submit = (e) => {
    console.log(this.state.price * this.state.amount)
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
        <Rater/>
     </div>
    )
  }
}