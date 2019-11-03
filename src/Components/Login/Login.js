import { React } from 'react';

export class Login extends React.Component {
  render() {
    return (
      <div class="login-modal">
        <h2 class="login-heading" onClick="changeTheme()">
          SWAPP
        </h2>
        <div class="login-card">
          <div id="login-error" class="login-error-message">
            Should be hidden until check
          </div>
          <input class="login-input" type="email" placeholder="email" />
          <input class="login-input" type="password" placeholder="password" />
          <button onClick="login()" class="load-more-button">
            Login
          </button>
        </div>
      </div>
    );
  }
}
