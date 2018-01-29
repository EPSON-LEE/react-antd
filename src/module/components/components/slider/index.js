import React from 'react'
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import { Input } from 'antd'
import QueueAnim from 'rc-queue-anim';
import './index.css'

export default class Slider extends React.Component{
  state ={
    show: false
  }
  onClick = () => this.setState({show: !this.state.show})
  render() {
    return (
      <div>
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>切换</Button>
        </p>
        <QueueAnim className="demo-content">
          {this.state.show ? [
            <div className="demo-thead" key="a">
              <div className='box'>
                你能看出我是个滑框吗
              </div>
            </div>
          ] : null}
        </QueueAnim>
      </div>
    )
  }
}