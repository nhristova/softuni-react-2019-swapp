import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Routes } from '../../pages';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter } from 'react-router-dom';

describe('Routes component', () => {
  it('Load without crashing', () => {
    let container = document.createElement('div');

    act(() => {
      ReactDOM.render(
        <MockedProvider mocks={[]}>
          <BrowserRouter>
            <Routes toggleTheme={() => {}} />
          </BrowserRouter>
        </MockedProvider>,
        container,
      );
    });
    expect(container).toMatchSnapshot();

    ReactDOM.unmountComponentAtNode(container);
  });
});
