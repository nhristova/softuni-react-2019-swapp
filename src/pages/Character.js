import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';
import { Detail, LRCard } from '../Components';
import { useParams } from 'react-router-dom';

export const CHARACTER_QUERY = gql`
  query($characterId: ID!) {
    person(id: $characterId) {
      id
      name
      birthYear
      height
      mass
      image
      homeworld {
        id
        name
      }
      species {
        id
        name
      }
      starships(first: 100) {
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  }
`;

export const Character = props => {
  const { characterId } = useParams();
  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: { characterId: characterId },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <p>Error</p>;

  const { person } = data;

  return (
    <main className="character-main">
      <div className="page-title page-title-1 heading-starwars text-highlight text-highlight ">
        {person.name}
      </div>
      <div className="page-content">
        <div className="page-column-half big-lr-card tb-card">
          <div className="tb-card-title heading-starwars text-highlight ">
            {person.name}
          </div>
          <div className="tb-card-photo">
            <img src={person.image} alt={person.name} />
          </div>
          <div className="tb-card-details">
            <Detail type="Height" value={person.height} />
            <Detail type="Weight" value={person.mass} />
            <Detail type="Species" value={person.species.name} />
            <Detail type="Home World" value={person.homeworld.name} />
          </div>
        </div>
        <div className="page-column-half starhips-list">
          <div className="column-title heading-starwars text-highlight2 page-title-2">
            Piloted Starships
          </div>
          {person.starships.edges.map(ship => (
            <LRCard
              item={ship.node}
              key={ship.node.id}
              page="starships"
              size="tiny-lr-card"
            />
          ))}
        </div>
      </div>
    </main>
  );
};
