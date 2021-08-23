import React from 'react'
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'


export default function Post ({post, setSelectedPost}) {
  
  const classes =  useStyles()
  const user = JSON.parse(localStorage.getItem('profile'))
  
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <Typography className={classes.title} variant='h6' gutterBottom>{post.title}</Typography>
    </Card>
  )
}
