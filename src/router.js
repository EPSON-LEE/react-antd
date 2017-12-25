import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import SiderDemo from './components/SiderDemo'

import Home from './module/home/home'
import InsertRedux from './module/popUp/insertRedux'
import MyEditor from './module/edit/index' 
import Tree from './module/tree/index'
import MotionTable from './module/motion/index'
import Animation from './module/animation/index'

const routes = () => (
  <Router>
    <SiderDemo>
      <Route exact path="/Home" component={Home}/>
      <Route path="/about" component={InsertRedux}/>
      <Route path="/MyEditor" component={MyEditor}/>
      <Route path="/Tree" component={Tree}></Route>
      <Route path="/MotionTable" component={MotionTable}></Route>
      <Route path="/Animation" component={Animation}></Route>
    </SiderDemo>
  </Router>
)

export default routes