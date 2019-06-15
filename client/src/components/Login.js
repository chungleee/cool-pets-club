import React, { Fragment } from 'react'
import { Paper, Container, TextField } from '@material-ui/core'

const Login = () => {
  return (
    <Fragment>
      <h1>Cool Pets Club</h1>
      <p>Log in to see the goodest pets in the world!</p>
      <Paper square={true}>
        <Container style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField label="Email" variant="outlined" margin="normal" />
          <TextField label="Password" variant="outlined" margin="normal" />
        </Container>
      </Paper>
    </Fragment>
  )
}

export default Login
