import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { Login } from '../pages';

describe('Login component', () => {
  it('Renders without crashing', () => {
    renderer.create(
      <MockedProvider mocks={[]}>
        <Login />
      </MockedProvider>,
    );
  });
});
