import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { pages, Login } from './Components';
import { } from './Components';


function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuthenticated = () => {
    console.log(`toggle-ing isAuthenticated from ${isAuthenticated}`);
    setIsAuthenticated(!isAuthenticated);
    console.log(`isAuthenticated is now ${isAuthenticated}`);
  };


  return (
    <div className="App">
      <BrowserRouter>
        <div className="navigation" onClick={toggleAuthenticated}>NAVBAR BE HERE</div>
        {/* <Appbar navs={demos} /> */}
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} />
            
            {pages.map(({ path, component }) => (
              isAuthenticated
                ? <Route path={path} key={path} component={component} />
                : <Redirect to="/login" key={path} />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

