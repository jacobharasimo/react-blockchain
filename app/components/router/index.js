import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../containers/homePage';
import { Oops } from '../../containers/oops';

export const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/404" component={Oops} />
  </Switch>
);
