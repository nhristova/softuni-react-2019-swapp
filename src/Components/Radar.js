import React from 'react';
import gql from 'graphql-tag.macro';
import RadarChart from 'react-svg-radar-chart';
import { useQuery } from '@apollo/react-hooks';

export const STARSHIP_CLASS_QUERY = gql`
  query($shipType: String) {
    allStarships(first: 100, after: "0", filter: { starshipClass: $shipType }) {
      edges {
        node {
          id
          starshipClass
          cost
          maxAtmosphericSpeed
          maxMLPerHour
          hyperdriveRating
          crew
        }
      }
    }
  }
`;

export const Radar = props => {
  const starship = props.starship;
  const { data, loading, error } = useQuery(STARSHIP_CLASS_QUERY, {
    variables: { shipType: starship.starshipClass },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <p>Error</p>;

  const { allStarships } = data;

  const chartCaptions = {
    cost: 'Cost',
    maxAtmosphericSpeed: 'Max Atm. Speed',
    maxMLPerHour: 'Max ML/h',
    hyperdriveRating: 'HyperD Rat.',
    crew: 'Crew',
  };

  const maxValues = getMaxStats(allStarships.edges);
  const stats = getShipStats(starship, maxValues);
  removeEmptyEntries(stats, chartCaptions);

  const chartData = [
    {
      data: stats,
      meta: { color: '#4bd5ee' },
    },
  ];

  return (
    <div className="starship-radar-chart">
      <RadarChart
        captions={chartCaptions}
        data={chartData}
        size={400}
        options={options}
      />
    </div>
  );
};

/* 
Helper functions, move to another file
*/

const getMax = (first, second) => {
  return first > second ? first : second;
};

const getMaxStats = ships => {
  const mv = {
    cost: 0,
    maxAtmosphericSpeed: 0,
    maxMLPerHour: 0,
    hyperdriveRating: 0,
    crew: 0,
  };

  ships.forEach(sh => {
    mv.cost = getMax(sh.node.cost, mv.cost);
    mv.maxAtmosphericSpeed = getMax(
      sh.node.maxAtmosphericSpeed,
      mv.maxAtmosphericSpeed,
    );
    mv.maxMLPerHour = getMax(sh.node.maxMLPerHour, mv.maxMLPerHour);
    mv.hyperdriveRating = getMax(sh.node.hyperdriveRating, mv.hyperdriveRating);
    mv.crew = getMax(sh.node.crew, mv.crew);
  });

  return mv;
};

const getShipStats = (ship, max) => {
  const result = {};
  ship.cost = ship.cost || 0;

  Object.keys(max).map(key => {
    const value = ship[key] !== null ? ship[key] : NaN;
    result[key] = value === 0 ? value : value / max[key];
    return value;
  });

  return result;
};

const removeEmptyEntries = (data, captions) => {
  Object.keys(data).forEach(key => {
    if (data[key] === null || isNaN(data[key])) {
      delete data[key];
      delete captions[key];
    }
  });
};

const options = {
  scales: 5,
  axes: false,
  dots: true,
};
