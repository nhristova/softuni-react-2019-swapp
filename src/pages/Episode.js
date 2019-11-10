import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

export const EPISODE_QUERY = gql`
  query($episodeId: ID!) {
    episode(id: $episodeId) {
      id
      title
      image
      openingCrawl
      director
      releaseDate
    }
  }
`;

export const Episode = props => {
  const { data, loading, error } = useQuery(EPISODE_QUERY, {
    variables: { episodeId: props.match.params.id },
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
          <div>
            <span className="text-highlight-2">Director: </span>
            <span className="text-highlight">{episode.director}</span>
          </div>
          <div>
            <span className="text-highlight-2">Release date: </span>
            <span className="text-highlight">{episode.releaseDate}</span>
          </div>
        </div>
      </div>
      <div className="characters-list">
        {
          // episode.characters.map(ch => <CharacterLRCard character={ch} key={ch.id} />)
        }
      </div>
      <button className="load-more-button">Load more</button>
    </main>
  );
};

export const CharacterLRCard = character => {
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
            href={`/character/:${character.id}`}
          >
            {character.name}
          </a>
        </div>
      </div>
    </div>
  );
};
