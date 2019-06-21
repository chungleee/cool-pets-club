import React, { Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  GridList,
  GridListTile,
  Button,
  IconButton
} from '@material-ui/core'

const Feed = () => {
  return (
    <Fragment>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="body1">Cool Pets Group</Typography>
          <IconButton>+</IconButton>
        </Toolbar>
      </AppBar>
      <GridList style={{ paddingTop: '100px' }} cellHeight={150} cols={3}>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
        <GridListTile>
          <img src="https://picsum.photos/id/237/150/150" alt="picture" />
        </GridListTile>
      </GridList>
    </Fragment>
  )
}

export default Feed
