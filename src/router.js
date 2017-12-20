import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/home'
import Topics from './components/topics'
import InsertRedux from './components/insertRedux'
import Page from './components/page'
import App from './components/Test'
import SiderDemo from './components/SiderDemo'

const routes = () => (
  <Router>
    <SiderDemo>
      <Route path="/Home" component={Home}/>
      <Route path="/about" component={InsertRedux}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/test" component={App}></Route>
    </SiderDemo>
  </Router>
)

export default routes