import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider, wait } from '@apollo/react-testing';
import { Home, AUTHENTICATED_QUERY } from '../../pages';
import { MemoryRouter } from 'react-router-dom';

describe('Home component', () => {
  it('Renders without crashing', async () => {
    const mocks = [
      {
        request: {
          query: AUTHENTICATED_QUERY,
        },
        result: {
          data: {
            authenticated: true,
          },
        },
      },
    ];
    const result = renderer.create(
      <MemoryRouter initialEntries={['/episodes']}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Home />
        </MockedProvider>
      </MemoryRouter>,
    );

    await renderer.act(async () => {
      await wait(0);
    });

    expect(result).toMatchSnapshot();
  });
});
