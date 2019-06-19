import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { TextField, Button, Typography, Link } from '@material-ui/core'

const style = {
  container_div: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  typo_container: { textAlign: 'center' },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    width: '70%',
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
      <Typography style={{ textAlign: 'center' }} variant="body1">
        {`Don't have an account? `}
        <Link color="inherit" component={RouterLink} to="/register">
          Register
        </Link>
      </Typography>
    </div>
  )
}

export default Login
