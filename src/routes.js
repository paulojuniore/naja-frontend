import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Session from './pages/Session';
import EditProduct from './pages/EditProduct';
import RegisterProduct from './pages/RegisterProduct';
import CategoryList from './pages/CategoryList';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/register' component={Register} />
        <Route path='/session' component={Session} />
        <Route path='/edit' component={EditProduct} />
        <Route path='/list/category' component={CategoryList} />
        <Route path='/product-register' component={RegisterProduct} />
      </Switch>
    </BrowserRouter>
  )
}