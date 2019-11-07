import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';
import { Pages, Login } from './Components';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

/* istanbul ignore next*/
const Home = () => {
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
    <Pages toggleTheme={toggleTheme} />
  ) : (
    <Login toggleTheme={toggleTheme} />
  );
};

export default Home;
