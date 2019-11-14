import React from 'react';
import { Link } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';

import { ReactComponent as SignOut } from '../assets/sign-out.svg';
export const Header = props => {
  const client = useApolloClient();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    client.writeData({ data: { authenticated: false } });
  };

  return (
    <header className="page-header">
      <div className="header-logo" onClick={props.changeTheme}>
        SWAPP
      </div>
      <nav className="header-navigation">
        <Link to="/episodes">Episodes</Link>
        <Link to="/characters">Characters</Link>
        <SignOut
          viewBox="13 15 70 70"
          className="logout-icon"
          onClick={handleSignOut}
        />
      </nav>
    </header>
  );
};
