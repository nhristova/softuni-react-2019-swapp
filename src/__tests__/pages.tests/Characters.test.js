import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
// import { wait } from '@apollo/react-testing';
import { Characters, CHARACTERS_QUERY } from '../../pages';

describe('Characters component', () => {
  it('Renders without crashing', async () => {
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
                hasNextPage: true,
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

    // let result;
    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Characters />
      </MockedProvider>,
    );

    // await renderer.act(() => {
    // })
    // await wait(0);
    // expect(result).toMatchSnapshot();
  });
});
