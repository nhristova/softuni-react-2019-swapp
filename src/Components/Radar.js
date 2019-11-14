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

const getMax = (first, second) => {
  if (first > second) {
    return first;
  }
  return second;
};

const maxValues = {
  cost: 0,
  maxAtmosphericSpeed: 0,
  maxMLPerHour: 0,
  hyperdriveRating: 0,
  crew: 0,
};

const chartCaptions = {
  cost: 'Cost',
  maxAtmosphericSpeed: 'Max Atm. Speed',
  maxMLPerHour: 'Max ML/h',
  hyperdriveRating: 'HyperD Rat.',
  crew: 'Crew',
};

const options = {
  size: 400,
  scales: 5,
  axes: false,
  dots: true,
};

export const Radar = props => {
  const starship = props.starship;
  const { data, loading, error } = useQuery(STARSHIP_CLASS_QUERY, {
    variables: { type: starship.starshipClass },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <p>Error</p>;

  const { allStarships } = data;

  allStarships.edges.forEach(el => {
    maxValues.cost = getMax(el.node.cost, maxValues.cost);
    maxValues.maxAtmosphericSpeed = getMax(
      el.node.maxAtmosphericSpeed,
      maxValues.maxAtmosphericSpeed,
    );
    maxValues.maxMLPerHour = getMax(
      el.node.maxMLPerHour,
      maxValues.maxMLPerHour,
    );
    maxValues.hyperdriveRating = getMax(
      el.node.hyperdriveRating,
      maxValues.hyperdriveRating,
    );
    maxValues.crew = getMax(el.node.crew, maxValues.crew);
  });

  const chartData = [
    {
      data: {
        cost: starship.cost / maxValues.cost,
        maxAtmosphericSpeed:
          starship.maxAtmosphericSpeed / maxValues.maxAtmosphericSpeed,
        maxMLPerHour: starship.maxMLPerHour / maxValues.maxMLPerHour,
        hyperdriveRating:
          starship.hyperdriveRating / maxValues.hyperdriveRating,
        crew: starship.crew / maxValues.crew,
      },
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
