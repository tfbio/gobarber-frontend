import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogIn from '../pages/LogIn';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LogIn} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
