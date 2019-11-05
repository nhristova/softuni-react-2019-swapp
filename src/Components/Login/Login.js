import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export const Login = props => {
  let [shouldRedirect, setShouldRedirect] = useState(false);

  //  const login = () => authenticate(() => setShouldRedirect(true));
  const login = () => setShouldRedirect(true);

  if (shouldRedirect) {
    return <Redirect to="/episodes" />
  }

  return (
    <div className="login-modal">
      <h2 className="login-heading">SWAPP</h2>
      <div className="login-card">
        <div id="login-error" className="login-error-message">
          Should be hidden until check
          </div>
        <input className="login-input" type="email" placeholder="email" />
        <input
          className="login-input"
          type="password"
          placeholder="password"
        />
        <button className="load-more-button" onClick={login}>Login</button>
      </div>
    </div>
  );
}
