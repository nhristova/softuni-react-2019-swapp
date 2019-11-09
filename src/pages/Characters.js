import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';

export const CHARACTERS_QUERY = gql`
  query AllPeople($perPage: Int!) {
    allPeople(first: $perPage) 
    {
      edges{
        node {
          id
          name
          image
        }
      }
    }
  }
`;

export const Characters = () => {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: { perPage: 12 }
  });

  if (loading) return <div>Loading</div>;
  if (error) return <p>Error</p>;

  const {
    allPeople: { edges }
  } = data;

  return (
    <main className="characters-main">
      <div className="characters-list">
        {edges.map(ed => <CharacterLRCard character={ed.node} key={ed.node.id} />)}
      </div>
      <button className="load-more-button">Load more</button>
    </main>
  );
};

export const CharacterLRCard = (prop) => {
  const character = prop.character;
  return (
    <div className="small-lr-card lr-card">
      <img
        className="lr-card-photo"
        src={character.image}
        alt={character.name}
      />
      <div className="lr-card-details">
        <div className="lr-card-title">
          <a
            className="heading-starwars text-highlight "
            href={`./characters/${character.id}`}
          >
            {character.name}
              </a>
        </div>
      </div>
    </div>
  )
}
