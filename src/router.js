import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import SiderDemo from './module/SiderDemo'

import Home from './module/home/home'
import InsertRedux from './module/popUp/insertRedux'
import MyEditor from './module/edit/index' 
import Tree from './module/tree/index'
import Components from './module/components/index'
import Animation from './module/animation/index'
import List from './module/list/index'
import Cascador from './module/cascador/index'
import LazyCascador from './module/lazyCascader/index'
import dynamicTree from './module/dynamicTree/index'

const routes = () => (
  <Router>
    <SiderDemo>
      <Route exact path="/Home" component={Home}/>
      <Route path="/about" component={InsertRedux}/>
      <Route path="/MyEditor" component={MyEditor}/>
      <Route path="/Tree" component={Tree}></Route>
      <Route path="/Components" component={Components}></Route>
      <Route path="/Animation" component={Animation}></Route>
      <Route path="/List" component={List} />
      <Route path="/Cascador" component={Cascador}></Route>
      <Route path="/LazyCascador" component={LazyCascador}></Route>
      <Route path="/dynamicTree" component={dynamicTree}></Route>
    </SiderDemo>
  </Router>
)

export default routes