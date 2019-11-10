import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';
import { Routes } from './Routes';
import { Login } from './Login';
import { Redirect } from 'react-router-dom';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

/* istanbul ignore next*/
export const Home = () => {
  const { data } = useQuery(AUTHENTICATED_QUERY);

  let [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
  };

  useEffect(() => {
    // TODO: Get theme from cookie? Use Context to store theme
    document.body.classList = theme;
  }, [theme]);

  return data.authenticated ? (
    <Routes toggleTheme={toggleTheme} />
  ) : (
    <>
      <Login toggleTheme={toggleTheme} />
      <Redirect to="/login" />
    </>
  );
};
