import React, { useEffect, useState } from 'react'

import { Container, Grid, Grow, Paper, AppBar, TextField, Button } from '@material-ui/core'
import ChipInput from 'material-ui-chip-input'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import Paginate from '../Paginationn/Paginate'
import useStyle from './styles'
import { useHistory, useLocation } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'

function useQuery(){
  return new URLSearchParams(useLocation().search)
}

function Home() {
  const classes = useStyle()
  const dispatch = useDispatch()
  const [selectedPost, setSelectedPost] = useState(null)
  const query = useQuery()
  const history = useHistory()
  const page = query.get('page') || 1
  const searchQuery = query.get ('searchQuery')
  
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])

  const handleKeyPress = (e) => {
    if(e.keyCode == 13) {
      console.log('search')
    }
  }

  const hanldeAdd = (tag) => setTags([...tags, tag])
  const hanldeDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !==tagToDelete)) 
  const searchPost = () => {console.log("search")}

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, selectedPost])

  

  return (
    <Grow in style={{ transformOrigin: '0 0 0' }} timeout='auto' > 
      <Container maxWidth='xl'>  
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={9}>
              <Posts setSelectedPost={setSelectedPost}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar className={classes.appBarSearch} position='static' color='inherit' >
                <TextField 
                  name='search' 
                  variant='outlined' 
                  label='Search Art' 
                  fullWidth
                  value={search}
                  onChange={(e) => {setSearch(e.target.value)}}
                  onKeyPress={handleKeyPress}
                />
                <ChipInput 
                  style={{ margin :'10px 0'}}
                  value={tags}
                  onAdd={hanldeAdd}
                  onDelete={hanldeDelete}
                  label="Search Tags"
                  variant="outlined"
                />
                <Button onClick={searchPost} color="primary" variant="contained"> Search</Button>
              </AppBar>
              <Form elevation={6} selectedPost={selectedPost} setSelectedPost={setSelectedPost}/>
              <Paper elevation={6} className={classes.pagination}>
                <Paginate />
              </Paper>
            </Grid>
          </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
