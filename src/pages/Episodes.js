import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';
import { TBCardEpisode } from '../Components/TBCardEpisode';

// TODO: Extract queries to separate folder
export const EPISODES_QUERY = gql`
  query {
    allEpisodes(first: 100) {
      edges {
        node {
          id
          title
          episodeId
          image
          openingCrawl
        }
      }
    }
  }
`;

export const Episodes = () => {
  const { data, loading, error } = useQuery(EPISODES_QUERY);
  if (loading) return <div>Loading</div>;
  if (error) return <p>Error</p>;

  const {
    allEpisodes: { edges },
  } = data;

  return (
    <main className="episodes-main">
      {edges.map(ed => (
        <TBCardEpisode episode={ed.node} key={ed.node.id} />
      ))}
    </main>
  );
};
