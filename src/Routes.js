import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Articles from './views/Articles/Articles'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import Users from './views/Users/Users'

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/registrarme" component={Register}/>
      <Route exact path="/productos" component={Articles}/>
      <Route exact path="/usuarios" component={Users}/>
      <Redirect to="/productos"/>
    </Switch>
  )
}

export default Routes;
