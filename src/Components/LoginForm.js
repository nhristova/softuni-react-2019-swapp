import React, { useState } from 'react';

export const LoginForm = props => {
  let [emailVal, setEmail] = useState('');
  let [passwordVal, setPassword] = useState('');

  const handleEmailChange = ({ target: { value: email } }) => {
    setEmail(email);
  };

  const handlePasswordChange = ({ target: { value: pass } }) => {
    setPassword(pass);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.signIn({ variables: { email: emailVal, password: passwordVal } });
  };

  return (
    <div className="login-modal">
      <h2 className="login-heading" onClick={props.toggleTheme}>
        SWAPP
      </h2>
      <form className="login-card" onSubmit={handleSubmit}>
        <div
          id="login-error"
          className={`login-error-message ${props.showError ? '' : 'hidden'}`}
        >
          Something went wrong with signin
        </div>
        <input
          className="login-input"
          type="email"
          placeholder="email"
          onChange={handleEmailChange}
          value={emailVal}
        />
        <input
          className="login-input"
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
          value={passwordVal}
        />
        <button className="load-more-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
