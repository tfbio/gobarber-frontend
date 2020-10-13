import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './route';

import LogIn from '../pages/LogIn';
import Register from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/register" component={Register} />
      <Route path="/forgot_password" component={ForgotPassword} />

      <Route path="/reset_password" component={ResetPassword} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
