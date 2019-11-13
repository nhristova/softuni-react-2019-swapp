import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider, wait } from '@apollo/react-testing';
import { Starship, STARSHIP_QUERY } from '../../pages';
import { MemoryRouter } from 'react-router-dom';

describe('Starship page', () => {
  it('Renders loader', async () => {
    let result = renderer.create(
      <MemoryRouter initialEntries={['/starships/starships.12']}>
        <MockedProvider mocks={[]}>
          <Starship />
        </MockedProvider>
        ,
      </MemoryRouter>,
    );

    expect(result).toMatchSnapshot();

    await renderer.act(async () => {
      await wait(0);
    });
  });

  it.skip('Renders mock data', async () => {
    const mock = {
      request: {
        query: STARSHIP_QUERY,
        variables: { perPage: 12 },
      },
      result: {
        data: {
          starship: {
            id: 'starships.12',
            name: 'X-wing',
            model: 'T-65 X-wing',
            image:
              'https://static.turbosquid.com/Preview/2015/10/14__02_29_23/xwingtopleft_01_open_01.jpgb5dc9c7c-25bc-44f8-88ba-50e41873111aOriginal.jpg',
            starshipClass: 'starfighter',
            cost: 149999,
            maxAtmosphericSpeed: 1050,
            maxMLPerHour: 100,
            hyperdriveRating: 1,
            crew: 1,
          },
        },
      },
    };

    let result = renderer.create(
      <MemoryRouter initialEntries={['/starships/starships.12']}>
        <MockedProvider mocks={[mock]} addTypename={false}>
          <Starship />
        </MockedProvider>
      </MemoryRouter>,
    );

    await renderer.act(async () => {
      await wait(0);
    });

    expect(result).toMatchSnapshot();
  });
});
