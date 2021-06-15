import React, { useEffect, useState } from 'react'

import { Container, Grid, Grow } from '@material-ui/core'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
// import useStyle from './styles'

import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'

function Home() {
  
  const dispatch = useDispatch()
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, selectedPost])

  return (
    <Container maxWidth='lg'>
      <Grow in> 
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
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

export default Home;
