import React from 'react';

export class Login extends React.Component {
  render() {
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
          <button className="load-more-button">Login</button>
        </div>
      </div>
    );
  }
}
