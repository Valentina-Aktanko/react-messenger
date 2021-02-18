import 'assets/global.css';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// browser-routing must be configured on the webserver
// for hash router must use hash-router
// autoscaling on the services, such as amason. google claude, microsoft azure and so on

import { Layout } from 'components/Layout';

ReactDom.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route exact path="/chats/:id" component={Layout} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);