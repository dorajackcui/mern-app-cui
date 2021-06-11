import React, { useEffect, useState } from 'react'

import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyle from './styles'

import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

function App() {
  const classes =  useStyle()
  const dispatch = useDispatch()
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, selectedPost])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img  className={classes.image} src={memories} alt='memories' height='60'/>
      </AppBar>
      <Grow in> 
        <Container>
          <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setSelectedPost={setSelectedPost}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form selectedPost={selectedPost} setSelectedPost={setSelectedPost}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
