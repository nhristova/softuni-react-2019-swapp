import React from 'react';

export const Characters = () => {
  return (
    <main className="characters-main">
      <div className="characters-list">
        <div className="small-lr-card lr-card">
          <img
            className="lr-card-photo"
            src="./imgs/obi-wan.jpeg"
            alt="Old Obi-Wan Kenobi with lightsaber"
          />
          <div className="lr-card-details">
            <div className="lr-card-title">
              <a
                className="heading-starwars text-highlight "
                href="./character"
              >
                Obi-Wan Kenobi
              </a>
            </div>
          </div>
        </div>
        <div className="small-lr-card lr-card">
          <img
            className="lr-card-photo"
            src="./imgs/obi-wan.jpeg"
            alt="Old Obi-Wan Kenobi with lightsaber"
          />
          <div className="lr-card-details">
            <div className="lr-card-title heading-starwars text-highlight ">
              Luke Skywalker
            </div>
          </div>
        </div>
        <div className="small-lr-card lr-card">
          <img
            className="lr-card-photo"
            src="./imgs/obi-wan.jpeg"
            alt="Old Obi-Wan Kenobi with lightsaber"
          />
          <div className="lr-card-details">
            <div className="lr-card-title heading-starwars text-highlight ">
              Luke Skywalker
            </div>
          </div>
        </div>
        <div className="small-lr-card lr-card">
          <img
            className="lr-card-photo"
            src="./imgs/obi-wan.jpeg"
            alt="Old Obi-Wan Kenobi with lightsaber"
          />
          <div className="lr-card-details">
            <div className="lr-card-title heading-starwars text-highlight ">
              Obi-Wan Kenobi
            </div>
          </div>
        </div>
      </div>
      <button className="load-more-button">Load more</button>
    </main>
  );
};
