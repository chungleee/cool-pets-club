import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, CssBaseline } from '@material-ui/core'
import Login from './components/Login'
import Register from './components/Register'
import Feed from './components/Feed'

const App = () => {
  return (
    <Container maxWidth="md">
      <CssBaseline>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/feed" component={Feed} />
        </Router>
      </CssBaseline>
    </Container>
  )
}

export default App
