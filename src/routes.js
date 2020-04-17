import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Session from './pages/Session';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/register' component={Register} />
        <Route path='/session' component={Session} />
      </Switch>
    </BrowserRouter>
  )
}