import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';
import { Detail, Radar } from '../Components';
import { useParams } from 'react-router';

export const STARSHIP_QUERY = gql`
  query($starshipId: ID!) {
    starship(id: $starshipId) {
      id
      name
      model
      image
      starshipClass
      cost
      maxAtmosphericSpeed
      maxMLPerHour
      hyperdriveRating
      crew
    }
  }
`;

export const Starship = props => {
  const { starshipId } = useParams();
  const { data, loading, error } = useQuery(STARSHIP_QUERY, {
    variables: { starshipId: starshipId },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <p>Error</p>;

  const { starship } = data;

  return (
    <main className="starship-main">
      <div className="page-title">
        <div className="page-title-1 heading-starwars text-highlight ">
          {starship.name}
        </div>
        <div className="page-title-2 heading-starwars text-highlight-2">
          {starship.model}
        </div>
      </div>
      <div className="page-content">
        <div className="page-column-half big-lr-card tb-card">
          <div className="tb-card-title heading-starwars text-highlight">
            {starship.name}
          </div>
          <div className="tb-card-photo">
            <img src={starship.image} alt={starship.name} />
          </div>
          <div className="tb-card-details">
            <Detail type={'Class'} value={starship.starshipClass} />
            <Detail type={'Cost'} value={starship.cost} />
            <Detail type={'Crew'} value={starship.crew} />
            <Detail
              type={'Max Atmospheric Speed'}
              value={starship.maxAtmosphericSpeed}
            />
            <Detail
              type={'Hyperdrive Rating'}
              value={starship.hyperdriveRating}
            />
          </div>
        </div>
        <div className="page-column-half">
          <div className="column-title heading-starwars text-highlight2 page-title-3">
            Compared to starship class max
          </div>
          <Radar starship={starship} />
        </div>
      </div>
    </main>
  );
};
