import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import SiderDemo from './components/SiderDemo'
import Home from './components/home'
import Topics from './components/topics'
import InsertRedux from './components/insertRedux'
import Page from './components/page'
import App from './components/Test'
import MyEditor from './module/edit/index' 

const routes = () => (
  <Router>
    <SiderDemo>
      <Route exact path="/Home" component={Home}/>
      <Route path="/about" component={InsertRedux}/>
      <Route path="/MyEditor" component={MyEditor}/>
      <Route path="/test" component={App}></Route>
    </SiderDemo>
  </Router>
)

export default routes