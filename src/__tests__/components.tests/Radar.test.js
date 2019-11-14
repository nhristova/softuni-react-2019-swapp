import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider, wait } from '@apollo/react-testing';
import { Radar, STARSHIP_CLASS_QUERY } from '../../Components';

describe('Routes component', () => {
  it('Load without crashing', async () => {
    const mocks = [
      {
        request: {
          query: STARSHIP_CLASS_QUERY,
          variables: { shipType: 'something' },
        },
        result: {
          data: {
            allStarships: {
              edges: [
                {
                  node: {
                    id: 'starships.10',
                    starshipClass: 'light freighter',
                    cost: 100000,
                    maxAtmosphericSpeed: 1050,
                    maxMLPerHour: 75,
                    hyperdriveRating: 0.5,
                    crew: 4,
                  },
                },
              ],
            },
          },
        },
      },
    ];

    const starshipMock = {
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
    };

    const cmp = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Radar starship={starshipMock} />
      </MockedProvider>,
    );
    expect(cmp).toMatchSnapshot();

    await renderer.act(async () => {
      await wait(0);
    });

    expect(cmp).toMatchSnapshot();
  });
});
