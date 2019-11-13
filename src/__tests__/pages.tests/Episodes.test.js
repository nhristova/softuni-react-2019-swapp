import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider, wait } from '@apollo/react-testing';
import { Episodes, EPISODES_QUERY } from '../../pages';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';

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

  it.skip('Renders loader ', () => {
    act(() => {
      ReactDOM.render(
        <MockedProvider mocks={[]}>
          <Episodes />
        </MockedProvider>,
        container,
      );
      expect(container).toMatchSnapshot();
    });
  });

  it.skip('Renders error', async () => {
    await act(() => {
      ReactDOM.render(
        <MockedProvider mocks={[]}>
          <Episodes />
        </MockedProvider>,
        container,
      );
    });

    expect(container).toMatchSnapshot();
  });

  it.skip('Renders episodes', async () => {
    const mock = {
      request: {
        query: EPISODES_QUERY,
      },
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
              },
            },
          ],
        },
      },
    };

    let result = {};

    result = renderer.create(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Episodes />
      </MockedProvider>,
    );
    await renderer.act(async () => {
      await wait(0);
    });

    expect(result.toJSON()).toMatchSnapshot();
  });
});
