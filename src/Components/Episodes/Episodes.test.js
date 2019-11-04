import ReactDOM from 'react-dom';
import React from 'react';
import Episodes from './Episodes';

describe('Login component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Episodes />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
