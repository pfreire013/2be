import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './screens/Login'
import ReceivedMessages from './screens/ReceivedMessages'
import Template from './screens/Template'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/received' component={ReceivedMessages}/>
        <Route path='/template' component={Template}/>
      </Switch>
    </BrowserRouter>
  );
}