import React from 'react'
import {
  Link
} from 'react-router-dom'

const page = () => (
  <div>
    <h1>React V16 Demo</h1>
    <ol>
      <li><Link to="/">动态计算，输入验证</Link></li>
      <li><Link to="/about">弹窗</Link></li>
      <li><Link to="/topics">双层路由</Link></li>
    </ol>
  </div>
)

export default page