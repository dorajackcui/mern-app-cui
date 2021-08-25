import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'


export default function Posts({setSelectedPost}){

  const classes = useStyles()
  const { posts, isLoading } = useSelector(state => state.posts)

  if (!posts?.length && !isLoading) return 'No posts'

  
  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        {posts.map(post => (
          <Grid item key={post._id} xs={12} sm={6} md={4}>
            <Post post={post} setSelectedPost={setSelectedPost} />
          </Grid>       
        ))}
      </Grid>
    )
  )
}
