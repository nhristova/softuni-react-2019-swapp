
import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { Characters } from './Characters';

describe('Characters component', () => {
  it('Renders without crashing', () => {

    renderer.create(
      <MockedProvider mocks={[]}>
        <Characters />
      </MockedProvider>
    )
  });
});
