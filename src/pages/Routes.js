import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Header } from '../Components';
import { Episodes } from './Episodes';
import { Characters } from './Characters';
import { Episode } from './Episode';
import { Character } from './Character';
import { Starship } from './Starship';

export const Routes = props => {
  return (
    <>
      <Header changeTheme={props.toggleTheme} />
      <Switch>
        <Route path="/episodes/:episodeId" component={Episode} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/characters/:characterId" component={Character} />
        <Route path="/characters" component={Characters} />
        <Route path="/starships/:starshipId" component={Starship} />
        <Redirect from="/login" to="/episodes" />
        <Redirect from="/" to="/episodes" />
      </Switch>
    </>
  );
};
