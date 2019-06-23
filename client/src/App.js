import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, CssBaseline } from '@material-ui/core'
import Login from './components/Login'
import Register from './components/Register'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Camera from './components/Camera'

const App = () => {
  return (
    <Container maxWidth="md">
      <CssBaseline>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/feed" component={Feed} />
          <Route path="/profile" component={Profile} />
          <Route path="/camera" component={Camera} />
        </Router>
      </CssBaseline>
    </Container>
  )
}

export default App
