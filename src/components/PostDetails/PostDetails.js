import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, CardActionArea, Card, CardMedia, Grow } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { getPostById, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';


function PostDetails() {
  const {id} = useParams()
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  

  useEffect(() => {
    dispatch(getPostById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post, dispatch]);

  const recommendedPosts = posts?.filter(( p ) => p?._id !== post?._id).slice(0,4);
  
  const openPost = (_id) => history.push(`/posts/${_id}`);
  
  if (isLoading) {
    return (
      <Paper elevation={2} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  
  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={2}>
      {!!post && (
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h3" component="h2" gutterBottom>{post.title}</Typography>
            <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
          <div className={classes.imageSection}>
            <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </div>
        </div> 
      )} 
        {!!recommendedPosts.length && (
        <div className={classes.recomSection}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ title, message, selectedFile, _id }) => (
              <Grow in key={_id}>
                <Card  className={classes.recommendedPost} elevation={2} > 
                    <Typography gutterBottom variant="h6">{title}</Typography>
                  <CardActionArea onClick={() => openPost(_id)} >
                    <Typography gutterBottom variant="subtitle2">{message.split(' ').splice(0, 15).join(' ')} ...<b>More</b></Typography>
                    <CardMedia className={classes.cardMedia} image={selectedFile} title={title} />
                    
                  </CardActionArea>
                </Card>
              </Grow>
            ))}
          </div>
        </div>
      )}
      
    </Paper>
  )
}

export default PostDetails
