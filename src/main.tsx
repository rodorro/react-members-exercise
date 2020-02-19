import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './app';
import { MembersTableComponent } from './components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { MemberComponent } from './components/member/member';
import { switchRoutes } from './core';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact={true} path={[switchRoutes.root, switchRoutes.membersTable]} 
        component={MembersTableComponent} />
      <Route path={switchRoutes.member} component={MemberComponent} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
