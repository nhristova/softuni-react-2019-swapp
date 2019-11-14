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
  const { data, loading, error } = useQuery(AUTHENTICATED_QUERY);

  const savedTheme = localStorage.getItem('theme');
  let [theme, setTheme] = useState(savedTheme || 'light-theme');

  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList = theme;
  }, [theme]);

  if (loading) return <div>Loading</div>;
  if (error) return <p>Error</p>;

  const newData = data;

  return newData.authenticated ? (
    <Routes toggleTheme={toggleTheme} />
  ) : (
    <>
      <Login toggleTheme={toggleTheme} />
      <Redirect to="/login" />
    </>
  );
};
