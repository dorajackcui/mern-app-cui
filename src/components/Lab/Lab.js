import React, { useState, useEffect} from 'react'
import useStyles from './styles'
import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'
 

export default function Lab() {
  const dispatch = useDispatch()
  const [selectedPost, setSelectedPost] = useState(null)
  const classes = useStyles()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, selectedPost])

  
  const posts = useSelector(state => state.posts)

  return (
    <section className={classes.cardList}>
      {posts.map(post => (
          <Post post={post}  />
        ))}
    </section>
  )
}
