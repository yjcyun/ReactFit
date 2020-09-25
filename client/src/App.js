import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { loadUser } from './redux/action/authAction';
import { setAuthToken } from './redux/utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import AccountDashboard from './components/user-account/AccountDashboard';
import './App.css';
import Shop from './components/products/Shop';
import Product from './components/product/Product';
import Cart from './components/cart/Cart';

const App = ({ loadUser }) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/my-account/login' component={Login} />
        <Route exact path='/my-account/register' component={Register} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/shop/:id' component={Product} />
        <Route exact path='/cart' component={Cart} />
        <PrivateRoute exact path='/my-account' component={AccountDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default connect(null, { loadUser })(App);