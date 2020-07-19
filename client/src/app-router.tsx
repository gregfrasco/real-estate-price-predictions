import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LandingScreen } from './screens/landing.screen';
import { HomesScreen } from './screens/homes.screen';
import { FlipScreen } from './screens/flip.screen';

const AppRouter: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/homes" exact component={HomesScreen} />
      <Route path="/flip" exact component={FlipScreen} />
      <Route path="/" component={LandingScreen} />
    </Switch>
  </BrowserRouter>
);

export { AppRouter };
