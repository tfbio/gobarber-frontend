import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogIn from '../pages/LogIn';
import Register from '../pages/SignUp';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
