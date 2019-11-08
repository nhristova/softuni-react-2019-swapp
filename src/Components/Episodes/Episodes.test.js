import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { Episodes, EPISODES_QUERY } from './Episodes';

describe('Episodes component', () => {
  it('Renders without crashing', () => {
    const mocks = [
      {
        request: {
          query: EPISODES_QUERY
        },
        result: {
          data: {
            allEpisodes: {
              edges: [
                {
                  node: {
                    id: "films.1",
                    title: "A New Hope",
                    episodeId: 4,
                    image: "https://m.media-amazon.com/images/I/81r+LN-YReL._SS500_.jpg",
                  }
                }
              ]
            }
          }
        }
      }
    ]

    renderer.create(
      <MockedProvider mocks={mocks} addTypeName={false}>
        <Episodes />
      </MockedProvider>);

  });
});
