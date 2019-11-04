import ReactDOM from 'react-dom';
import React from 'react';
import Login from './Login';

describe('Login component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
