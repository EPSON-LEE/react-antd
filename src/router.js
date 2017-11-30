import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Topics from './components/topics'
import Page from './components/page'
import InsertRedux from './components/insertRedux'
import CalcultePrice from './components/components/calculatePrice'

const routes = () => (
  <Router>
    <div>
      <CalcultePrice />
      <InsertRedux />
      <hr/>
      <Page />
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

export default routes