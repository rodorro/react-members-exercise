import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './history';
import { routes } from './routes';
import { MemberCollectionContainer } from '../../components/member-collection/member-collection.container';
import { MemberEditContainer } from '../../components/member-edit/member-edit.container';

export const RouterComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path={[routes.root, routes.membersCollection]} 
          component={MemberCollectionContainer} />
        <Route path={routes.memberEdit} component={MemberEditContainer} />
      </Switch>
  </Router>
  );
};
