import React from 'react'
import { Box, Container, Grid, Typography, Avatar } from '@material-ui/core'
import Layout from './Layout'

const Profile = () => {
  const style = {
    avatar: { width: '50px', height: '50px', margin: 'auto' }
  }
  return (
    <Layout>
      <Box borderBottom={1}>
        <Grid container direction="column" alignContent="center">
          <Avatar style={style.avatar}>J</Avatar>
          <div>
            <Typography align="center" variant="h6">
              John Doe
            </Typography>
            <Typography align="center" variant="body1">
              Please check out my good boys!
            </Typography>
          </div>
        </Grid>
      </Box>
    </Layout>
  )
}

export default Profile
