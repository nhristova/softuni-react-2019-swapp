import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
export const Header = props => {
  return (
    <BrowserRouter>
      <header className="page-header">
        <div className="header-logo" onClick={props.changeTheme}>
          SWAPP
        </div>
        <nav className="header-navigation">
          <Link to="/episodes">Episodes</Link>
          <Link to="/characters">Characters</Link>
          <span className="logout-icon" onClick={props.logout}>
            ➡
          </span>
        </nav>
      </header>
    </BrowserRouter>
  );
};
