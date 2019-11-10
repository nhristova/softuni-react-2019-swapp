import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

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
  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: { characterId: props.match.params.characterId },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <p>Error</p>;

  const { person } = data;
  console.log(person);

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
            <div>
              <span className="text-highlight-2">Height:</span>
              <span className="text-highlight">{person.height}</span>
            </div>
            <div>
              <span className="text-highlight-2">Weight:</span>
              <span className="text-highlight">{person.mass}</span>
            </div>
            <div>
              <span className="text-highlight-2">Species:</span>
              <span className="text-highlight">{person.species.name}</span>
            </div>
            <div>
              <span className="text-highlight-2">Home World:</span>
              <span className="text-highlight">{person.homeworld.name}</span>
            </div>
          </div>
        </div>
        <div className="page-column-half starhips-list">
          <div className="column-title heading-starwars text-highlight2 page-title-2">
            Piloted Starships
          </div>
          {person.starships.edges.map(ship => (
            <StarshipLRCard starship={ship.node} key={ship.node.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export const StarshipLRCard = props => {
  const ship = props.starship;
  return (
    <div className="tiny-lr-card lr-card">
      <img className="lr-card-photo" src={ship.image} alt={ship.name} />
      <div className="lr-card-details">
        <div className="lr-card-title">
          <a
            href={`/starship/${ship.id}`}
            className="heading-starwars text-highlight "
          >
            {ship.name}
          </a>
        </div>
      </div>
    </div>
  );
};
