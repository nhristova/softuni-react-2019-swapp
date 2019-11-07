import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Header } from './Header';
import { Episodes } from './Episodes';
import { Characters } from './Characters';

export const Pages = props => {
  return (
    <>
      <Header changeTheme={props.toggleTheme} />
      <Switch>
        <Route path="/episodes" component={Episodes} />
        <Route path="/characters" component={Characters} />
        <Redirect from="/login" to="/episodes" />
        <Redirect from="/" to="/episodes" />
      </Switch>
    </>
  );
};
