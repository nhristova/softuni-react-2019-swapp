import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { wait } from '@apollo/react-testing';
import { Characters, CHARACTERS_QUERY } from '../../pages';
import { MemoryRouter } from 'react-router-dom';

describe('Characters component', () => {
  it('Renders mock data', async () => {
    const mocks = [
      {
        request: {
          query: CHARACTERS_QUERY,
          variables: { perPage: 12 },
        },
        result: {
          data: {
            allPeople: {
              pageInfo: {
                hasNextPage: false,
                endCursor: 'blah',
              },
              edges: [
                {
                  node: {
                    id: 'people.1',
                    name: 'Luke Skywalker',
                    image: 'http://jhg',
                  },
                },
              ],
            },
          },
        },
      },
    ];

    let result = renderer.create(
      <MemoryRouter initialEntries={['/characters']}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Characters />
        </MockedProvider>
      </MemoryRouter>,
    );

    await renderer.act(async () => {
      await wait(0);
    });

    expect(result).toMatchSnapshot();
  });
});
