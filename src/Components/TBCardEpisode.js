import React from 'react';
import { Link } from 'react-router-dom';

export const TBCardEpisode = prop => {
  const episode = prop.episode;
  return (
    <div className="episode-card tb-card">
      <div className="tb-card-photo">
        <img src={episode.image} alt={`Poster ${episode.title}`} />
      </div>
      <div className="tb-card-title">
        <Link
          to={`/episodes/${episode.id}`}
          className="heading-starwars text-highlight"
        >
          {episode.title}
        </Link>
      </div>
      <div className="tb-card-description">{episode.openingCrawl}</div>
    </div>
  );
};
