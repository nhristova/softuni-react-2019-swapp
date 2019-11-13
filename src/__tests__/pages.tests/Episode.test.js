import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider, wait } from '@apollo/react-testing';
import { MemoryRouter } from 'react-router-dom';
import { Episode } from '../../pages';

describe('Episode page', () => {
  it('Load without crashing', async () => {
    let result = renderer.create(
      <MemoryRouter initialEntries={['/episodes/films.1']}>
        <MockedProvider mocks={[]}>
          <Episode />
        </MockedProvider>
      </MemoryRouter>,
    );

    expect(result).toMatchSnapshot();

    await renderer.act(async () => {
      await wait(0);
    });
  });
});
