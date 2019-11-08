
import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { Header } from './Header';

describe('Header component', () => {
  it('Renders without crashing', () => {
    renderer.create(
      <MockedProvider mocks={[]}>
        <Header />
      </MockedProvider>
    )
  });
});
