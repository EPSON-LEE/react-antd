import React from 'react'
// import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Topics from './components/topics'
import Page from './components/page'

const routes = () => (
  <Router>
    <div>
      <Page />
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

export default routes