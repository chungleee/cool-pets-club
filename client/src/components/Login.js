import React from 'react'
import { TextField, Button, Typography } from '@material-ui/core'

const style = {
  container_div: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  typo_container: { textAlign: 'center' },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    width: '70%',
    marginTop: '5rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  button: { margin: '1.25rem auto', width: '50%' }
}

const Login = () => {
  return (
    <div style={style.container_div}>
      <div style={style.typo_container}>
        <Typography variant="h3">Cool Pets Club</Typography>
        <Typography variant="subtitle2">
          Log in to see the goodest pets in the world!
        </Typography>
      </div>
      <form style={style.form}>
        <TextField id="email" label="Email" name="email" margin="normal" />
        <TextField
          id="password"
          label="Password"
          name="password"
          margin="normal"
        />
        <Button size="small" variant="outlined" style={style.button}>
          Log In
        </Button>
      </form>
    </div>
  )
}

export default Login
