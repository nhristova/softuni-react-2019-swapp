import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import { LRCard } from '../Components';

export const CHARACTERS_QUERY = gql`
  query AllPeople($perPage: Int!) {
    allPeople(first: $perPage) {
      edges {
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
    variables: { perPage: 12 },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <p>Error</p>;

  const {
    allPeople: { edges },
  } = data;

  return (
    <main className="characters-main">
      <div className="characters-list">
        {edges.map(ed => (
          <LRCard
            item={ed.node}
            key={ed.node.id}
            page="characters"
            size="small-lr-card"
          />
        ))}
      </div>
      <button className="load-more-button">Load more</button>
    </main>
  );
};
