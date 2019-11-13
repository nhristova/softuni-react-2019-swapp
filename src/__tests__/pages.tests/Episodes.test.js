import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider, wait } from '@apollo/react-testing';
import { Episodes, EPISODES_QUERY } from '../../pages';
import { MemoryRouter } from 'react-router-dom';

describe('Episodes component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('Renders loader and error', async () => {
    let result = renderer.create(
      <MemoryRouter initialEntries={['/episodes']}>
        <MockedProvider mocks={[]}>
          <Episodes />
        </MockedProvider>
      </MemoryRouter>,
      container,
    );
    expect(result).toMatchSnapshot();

    await renderer.act(async () => {
      await wait(0);
    });

    expect(result).toMatchSnapshot();
  });

  it('Renders episodes', async () => {
    const mock = {
      request: {
        query: EPISODES_QUERY,
        variables: {},
      },
      result: {
        data: {
          allEpisodes: {
            edges: [
              {
                node: {
                  id: 'films.1',
                  title: 'A New Hope',
                  episodeId: 4,
                  image:
                    'https://m.media-amazon.com/images/I/81r+LN-YReL._SS500_.jpg',
                  openingCrawl: 'bala',
                },
              },
            ],
          },
        },
      },
    };

    let result = renderer.create(
      <MemoryRouter initialEntries={['/episodes']}>
        <MockedProvider mocks={[mock]} addTypename={false}>
          <Episodes />
        </MockedProvider>
      </MemoryRouter>,
    );
    await renderer.act(async () => {
      await wait(0);
    });

    expect(result).toMatchSnapshot();
  });
});
