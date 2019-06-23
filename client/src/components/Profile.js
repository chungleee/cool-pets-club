import React from 'react'
import { Container, Grid, Typography, Avatar } from '@material-ui/core'

const Profile = () => {
  return (
    <Container>
      <Grid
        style={{ padding: '2rem' }}
        container
        direction="column"
        alignContent="center"
      >
        <Avatar style={{ width: '50px', height: '50px', margin: 'auto' }}>
          J
        </Avatar>
        <div>
          <Typography align="center" variant="h6">
            John Doe
          </Typography>
          <Typography align="center" variant="body1">
            Please check out my good boys!
          </Typography>
        </div>
      </Grid>
    </Container>
  )
}

export default Profile
