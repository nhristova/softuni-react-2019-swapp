import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { Header } from '../../Components';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
  it('Renders without crashing', () => {
    const result = renderer.create(
      <MockedProvider mocks={[]}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </MockedProvider>,
    );
    expect(result).toMatchSnapshot();
  });
});
