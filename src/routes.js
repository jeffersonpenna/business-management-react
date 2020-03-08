import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Company from './pages/Company/list';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/company/:id" component={Company} />
    </Switch>
  );
}
