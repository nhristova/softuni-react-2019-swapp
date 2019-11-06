import React from 'react';
import { Link } from 'react-router-dom';

export const Characters = () => {

  return (
    <main className="characters-main">
      <div className="characters-list">
        <div className="small-lr-card lr-card">
          <img className="lr-card-photo" src="./imgs/obi-wan.jpeg" alt="Old Obi-Wan Kenobi with lightsaber" />
          <div className="lr-card-details">
            <div className="lr-card-title"><Link className="heading-starwars text-highlight " to="./character">Obi-Wan Kenobi</Link></div>
          </div>
        </div>
        <div className="small-lr-card lr-card">
          <img className="lr-card-photo" src="./imgs/obi-wan.jpeg" alt="Old Obi-Wan Kenobi with lightsaber" />
          <div className="lr-card-details">
            <div className="lr-card-title heading-starwars text-highlight ">Luke Skywalker</div>
          </div>
        </div>
        <div className="small-lr-card lr-card">
          <img className="lr-card-photo" src="./imgs/obi-wan.jpeg" alt="Old Obi-Wan Kenobi with lightsaber" />
          <div className="lr-card-details">
            <div className="lr-card-title heading-starwars text-highlight ">Luke Skywalker</div>
          </div>
        </div>
        <div className="small-lr-card lr-card">
          <img className="lr-card-photo" src="./imgs/obi-wan.jpeg" alt="Old Obi-Wan Kenobi with lightsaber" />
          <div className="lr-card-details">
            <div className="lr-card-title heading-starwars text-highlight ">Obi-Wan Kenobi</div>
          </div>
        </div>
      </div>
      <button className="load-more-button">Load more</button>
    </main>
  );
}
