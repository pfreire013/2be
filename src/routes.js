import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './screens/Login'
import Home from './screens/Home'
import Received from './screens/Received'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/received' component={Received}/>
      </Switch>
    </BrowserRouter>
  );
}