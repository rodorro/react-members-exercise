import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './app';
import { MembersTableComponent } from './components';
import { HashRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={MembersTableComponent} />
      {/* <Route path="/hotel-collection" component={HotelCollectionScene} /> */}
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
