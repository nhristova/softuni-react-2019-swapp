import ReactDOM from 'react-dom';
import React from 'react';
import { Characters } from './Characters';

describe('Login component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Characters />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
