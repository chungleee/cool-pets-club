import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
    <Container>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </Container>
  )
}

export default App
