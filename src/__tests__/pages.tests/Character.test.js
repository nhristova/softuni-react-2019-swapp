import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter } from 'react-router-dom';
import { wait } from '@apollo/react-testing';
import { Character, CHARACTER_QUERY } from '../../pages';

describe('Character page', () => {
  it('Loads mock data', async () => {
    const mocks = [
      {
        request: {
          query: CHARACTER_QUERY,
          variables: {},
        },
        result: {
          data: {
            person: {
              id: 'people.42',
              name: 'Quarsh Panaka',
              birthYear: null,
              height: 183,
              mass: null,
              image: null,
              homeworld: {
                id: 'planets.8',
                name: 'Naboo',
              },
              species: {
                id: 'species.1',
                name: 'Human',
              },
              starships: {
                edges: [],
              },
            },
          },
        },
      },
    ];

    let result = renderer.create(
      <MemoryRouter initialEntries={['/characters/people.42']}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Character />
        </MockedProvider>
      </MemoryRouter>,
    );

    await renderer.act(async () => {
      await wait(0);
    });

    expect(result).toMatchSnapshot();
  });
});
