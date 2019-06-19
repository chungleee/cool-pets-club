import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, CssBaseline } from '@material-ui/core'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
    <Container maxWidth="xs">
      <CssBaseline>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
        </Router>
      </CssBaseline>
    </Container>
  )
}

export default App
