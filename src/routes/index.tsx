import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './route';

import LogIn from '../pages/LogIn';
import Register from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/register" component={Register} />
      <Route path="/forgotpassword" component={ForgotPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
