import React, {useState} from 'react'
import { Avatar, Grid, Container, Button, Paper, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { GoogleLogin } from 'react-google-login'

import useStyle from './styles'
import {useDispatch} from 'react-redux'
import { signIn, signUp } from '../../actions/auth'
import { useHistory } from 'react-router-dom'

import Input from './Input'
import Icon from './icon'

export default function Auth() {
  const classes = useStyle()
  const dispatch = useDispatch()
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()
  
  const initialFormData = {
    firstName : '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword :'',
  }
  const [formData, setFormData] = useState(initialFormData)

  // Form Handle
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignUp){
      dispatch(signUp(formData, history))
    } else {
      dispatch(signIn(formData, history))
    }
    console.log(formData)
  } 

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  } 

  const handleShowPassword = () => {
    setShowPassword(prev=> !prev)
  }

  // Google Login Handle
  const googleSuccess = async (res) =>{
    // console.log(res)
    const result = res?.profileObj
    const token = res?.tokenId
    try {
      dispatch({type:'AUTH', data:{result, token}})
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = async (error) =>{
    console.log(error)
    console.log('Google Sign In was unsuccessful, please try later.')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'> {isSignUp ? 'Sign Up' : 'Sign In'} </Typography>
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>
                  <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                  <Input name='lastName' label='Last Name' handleChange={handleChange} half/>
                </>
              )
            }
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
            { isSignUp && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' /> }
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          < GoogleLogin 
            clientId='966542886498-uv6vquo34vfjk67dqrgbf5ko7g1i32ij.apps.googleusercontent.com'
            render={renderProps => (
              <Button 
              className={classes.googleButton} 
              color='primary' 
              fullWidth onClick={renderProps.onClick} 
              disabled={renderProps.disabled} 
              startIcon={<Icon />} 
              variant='contained'> 
               Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={()=>{setIsSignUp(prev => !prev)}}>
                {isSignUp ? 'Already have an account ? Sign In' : "Don't have an account ? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}
