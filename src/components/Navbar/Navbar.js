import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Button, Toolbar, Avatar } from '@material-ui/core'
import memories from '../../images/memories.png'
import useStyle from './styles'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'

export default function Navbar() {
  const classes =  useStyle()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const logout = ()=> {
    dispatch({ type:'LOGOUT'})
    history.push('/auth')
    setUser(null)
  }


  useEffect(() => {
    const token = user?.token
    if (token) {
      const decodedToken = decode(token)
      // time pass logout
      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])


  return (
    <AppBar className={classes.appBar} position='static' color='inherit' elevation={6}>
      <div>
        <Typography component={Link} to='/posts' className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img  className={classes.image} src={memories} alt='memories' height='60'/>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            {/* <Typography className={classes.userName} varait='body2'>{user.result.name}</Typography> */}
            <Button variant='contained' size="small" className={classes.logout} color='secondary' onClick={logout} >Logout</Button>
          </div>
        )  
        : (
          <Button component={Link} to='/auth' variant='contained' color='primary'>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
