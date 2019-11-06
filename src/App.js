import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { pages, Login, Header } from './Components';

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    // TODO: Get theme from cookie? Use Context to store theme
    document.body.classList = theme;
    console.log(`Changing theme to ${theme}`);
  }, [theme]);

  const toggleAuthenticated = () => {
    setIsAuthenticated(!isAuthenticated);
    console.log(`isAuthenticated will toggle from ${isAuthenticated}`);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated && (
          <Header changeTheme={toggleTheme} logout={toggleAuthenticated} />
        )}
        {/* <Appbar navs={demos} /> */}
        <div className="container">
          <Switch>
            <Route
              path="/login"
              render={() => (
                <Login isLogged={isAuthenticated} login={toggleAuthenticated} />
              )}
            />

            {pages.map(({ path, component }) =>
              isAuthenticated ? (
                <Route path={path} key={path} component={component} />
              ) : (
                <Redirect to="/login" key={path} />
              ),
            )}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
