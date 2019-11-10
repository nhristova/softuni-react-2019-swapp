import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Header } from '../Components';
import { Episodes } from './Episodes';
import { Characters } from './Characters';
import { Episode } from './Episode';
import { Character } from './Character';

export const Routes = props => {
  return (
    <>
      <Header changeTheme={props.toggleTheme} />
      <Switch>
        <Route path="/episodes/:id" render={props => <Episode {...props} />} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/characters/:id" component={Character} />
        <Route path="/characters" component={Characters} />
        <Redirect from="/login" to="/episodes" />
        <Redirect from="/" to="/episodes" />
      </Switch>
    </>
  );
};
