import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';

export const EPISODES_QUERY = gql`
  query{
    allEpisodes(first: 100){
      edges{
        node{
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
  if (error) return <p>Error on getting all cars</p>;

  const {
    allEpisodes: { edges }
  } = data;

  return (
    <main className="episodes-main">
      {edges.map(ed => <EpisodeTBCard episode={ed.node} key={Math.random()} />)}
    </main>
  );
};

export const EpisodeTBCard = (prop) => {
  const episode = prop.episode;
  return (
    <div className="episode-card tb-card">
      <div className="tb-card-photo">
        <img
          src={episode.image}
          alt={`Poster ${episode.title}`}
        />
      </div>
      <div className="tb-card-title">
        <a className="heading-starwars text-highlight " href="./episode">{episode.title}</a>
      </div>
      <div className="tb-card-description">{episode.openingCrawl}</div>
    </div>
  );
}
