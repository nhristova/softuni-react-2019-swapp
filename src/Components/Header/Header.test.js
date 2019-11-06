import ReactDOM from 'react-dom';
import React from 'react';
import { Header } from './Header';

describe('Header component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
