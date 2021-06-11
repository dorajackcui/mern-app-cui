import React, {useState, useEffect} from 'react'
import useStyles from './sytles'
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase64 from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import {createPost, updatePost} from '../../actions/posts'

export default function Form({selectedPost, setSelectedPost}) {
  const classes =  useStyles()
  const dispatch = useDispatch()
  const currentPost = useSelector(state => selectedPost ? state.posts.find(p => p._id === selectedPost): null)

  const [postData, setPostData] = useState({
    creator:'',
    title:'', 
    message:'',
    tags:'',
    selectedFile:'',
  })
   
  useEffect(() => {
    if(currentPost) setPostData(currentPost)
  }, [currentPost])


  const handleSubmit = (e)=>{
    e.preventDefault()
    if(selectedPost){
      dispatch(updatePost(selectedPost, postData))
    }else{
      dispatch(createPost(postData))
    }

    clear()
  }

  const clear = ()=> {
    setSelectedPost(null) 
    setPostData({
      creator:'',
      title:'', 
      message:'',
      tags:'',
      selectedFile:'',
    })
  }

  return (

    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{selectedPost ? 'Edit a Memory' : 'Create a Memory'}</Typography>
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}>
          <FileBase64 type='file' multiple={false} 
          onDone={({base64}) => {
            setPostData({...postData, selectedFile:base64})
          }} />
        </div>
        <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth> Submit </Button> 
        <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth> Clear </Button> 
      </form>
    </Paper>
  )
}
