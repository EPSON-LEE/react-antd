
import React from 'react'
import QueueAnim from 'rc-queue-anim';
import './index.css'

export default class Motion extends React.Component {
  render() {
    return (
      <div>
          <QueueAnim delay={300} className="queue-simple">
          <div key="a">依次进场</div>
          <div key="b">依次进场</div>
          <div key="c">依次进场</div>
          <div key="d">依次进场</div>
          <div key="e">依次进场</div>
          <div key="f">依次进场</div>
          <div key="g">依次进场</div>
          <div key="h">依次进场</div>
          <div key="i">依次进场</div>
          <div key="j">依次进场</div>
          <div key="k">依次进场</div>
        </QueueAnim>
      </div>
    )
  }
}