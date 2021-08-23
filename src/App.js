import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Lab from './components/Lab/Lab'

 function App() {

  return (
    <>
      <BrowserRouter>
        <Container maxWidth='lg'>
          <Navbar />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/auth' exact component={Auth} />
            </Switch>
        </Container>
      </BrowserRouter>

    <BrowserRouter>
        <Switch>
          <Route path='/lab' exact component={Lab}/> 
        </Switch>
    </BrowserRouter>
  </>
  )
}

export default App