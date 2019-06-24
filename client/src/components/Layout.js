import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'

const Layout = ({ children }) => {
  const style = {
    Toolbar: { justifyContent: 'space-between' }
  }

  return (
    <div style={{ paddingTop: '75px' }}>
      <Box>
        <AppBar position="fixed" color="default">
          <Toolbar style={style.Toolbar}>
            <Typography variant="body1">Cool Pets Group</Typography>
            <div>
              <Link to="/camera">
                <IconButton>
                  <Icon className="fas fa-camera-retro" />
                </IconButton>
              </Link>
              <Link to="/profile">
                <IconButton>
                  <Icon className="fas fa-user-circle" />
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  )
}

export default Layout
