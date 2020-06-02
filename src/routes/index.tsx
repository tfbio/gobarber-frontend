import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import PagesOfMyApp from '';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={WelcomePage} />
  </Switch>
);

export default Routes;
