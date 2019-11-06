import React from 'react';
import { Redirect } from 'react-router-dom';

/* istanbul ignore next*/
export const Login = props => {
  if (props.isLogged) {
    return <Redirect to="/episodes" />;
  }

  return (
    <div className="login-modal">
      <h2 className="login-heading" onClick={props.changeTheme}>
        SWAPP
      </h2>
      <div className="login-card">
        <div id="login-error" className="login-error-message">
          Should be hidden until check
        </div>
        <input className="login-input" type="email" placeholder="email" />
        <input className="login-input" type="password" placeholder="password" />
        <button className="load-more-button" onClick={props.login}>
          Login
        </button>
      </div>
    </div>
  );
};
