import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { Characters, CHARACTERS_QUERY } from '../pages';

describe('Characters component', () => {
  it('Renders without crashing', () => {
    const mocks = [
      {
        request: {
          query: CHARACTERS_QUERY,
          variables: { perPage: 12 },
        },
        result: {
          data: {
            allPeople: {
              edges: [
                {
                  node: {
                    id: 'people.1',
                    name: 'Luke Skywalker',
                  },
                },
              ],
            },
          },
        },
      },
    ];

    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Characters />
      </MockedProvider>,
    );
  });
});
