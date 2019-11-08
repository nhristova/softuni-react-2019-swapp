import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
export const Header = props => {
  const client = useApolloClient();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    client.writeData({ data: { authenticated: false } });
  };

  return (
    <BrowserRouter>
      <header className="page-header">
        <div className="header-logo" onClick={props.changeTheme}>
          SWAPP
        </div>
        <nav className="header-navigation">
          <Link to="/episodes">Episodes</Link>
          <Link to="/characters">Characters</Link>
          <span className="logout-icon" onClick={handleSignOut}>
            ➡
          </span>
        </nav>
      </header>
    </BrowserRouter>
  );
};
