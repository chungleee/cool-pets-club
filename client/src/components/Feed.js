import React, { Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  GridList,
  GridListTile,
  Icon,
  IconButton
} from '@material-ui/core'

const style = {
  Toolbar: { justifyContent: 'space-between' },
  GridList: { paddingTop: '100px' }
}

const Feed = () => {
  return (
    <Fragment>
      <AppBar position="fixed" color="default">
        <Toolbar style={style.Toolbar}>
          <Typography variant="body1">Cool Pets Group</Typography>
          <div>
            <IconButton>
              <Icon className="fas fa-camera-retro" />
            </IconButton>
            <IconButton>
              <Icon className="fas fa-user-circle" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <GridList style={style.GridList} cellHeight={160} cols={3}>
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
