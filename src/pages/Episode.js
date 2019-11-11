import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';
import { Detail, LRCard } from '../Components';

export const EPISODE_QUERY = gql`
  query($episodeId: ID!) {
    episode(id: $episodeId) {
      id
      title
      image
      openingCrawl
      director
      releaseDate
      people(first: 5) {
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

export const Episode = props => {
  const { data, loading, error } = useQuery(EPISODE_QUERY, {
    variables: { episodeId: props.match.params.episodeId },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <p>Error</p>;

  const { episode } = data;

  return (
    <main className="episode-main">
      <div className="big-lr-card lr-card">
        <img
          className="lr-card-photo"
          src={episode.image}
          alt={episode.title}
          width="100%"
        />
        <div className="lr-card-details">
          <div className="lr-card-title heading-starwars text-highlight ">
            {episode.title}
          </div>
          <div className="lr-card-subtitle heading-starwars text-highlight-2">
            subtitle??
          </div>
        </div>
      </div>
      <div className="episode-details">
        <div className="episode-synopsis">{episode.openingCrawl}</div>
        <div className="episode-info">
          <Detail type="Director" value={episode.director} />
          <Detail type="Release date" value={episode.releaseDate} />
        </div>
      </div>
      <div className="characters-list">
        {episode.people.edges.map(ch => (
          <LRCard
            item={ch.node}
            key={ch.node.id}
            size="small-lr-card"
            page="characters"
          />
        ))}
      </div>
      <button className="load-more-button">Load more</button>
    </main>
  );
};
