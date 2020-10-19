import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import TodoAppPage from './pages/TodoAppPage'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={TodoAppPage} />
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
