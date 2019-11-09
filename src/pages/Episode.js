import React from 'react';

export const Episode = () => {
  return (
    <main className="episode-main">
        <div className="big-lr-card lr-card">
            <img className="lr-card-photo" src="./imgs/episode-II-poster.jpg" alt="Poster with Natalie Portman" width="100%" />
            <div className="lr-card-details">
                <div className="lr-card-title heading-starwars text-highlight ">Star Wars: Episode I</div>
                <div className="lr-card-subtitle heading-starwars text-highlight-2">The Phantom Menace</div>
            </div>
        </div>
        <div className="episode-details">
            <div className="episode-synopsis">
                <p>Two Jedi escape a hostile blockade to find allies and come across a young boy
                    who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.
                    Two
                    Jedi escape a hostile blockade to find allies and come across a young boy
                    who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.
                </p>
                <p>Two Jedi escape a hostile blockade to find allies and come across a young boy
                    who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.
                </p>
            </div>
            <div className="episode-info">
                <div>
                    <span className="text-highlight-2">Director:</span>
                    <span className="text-highlight">George Lucas</span>
                </div>
                <div>
                    <span className="text-highlight-2">Release date:</span>
                    <span className="text-highlight">19-05-1999</span>
                </div>
            </div>
        </div>
        <div className="characters-list">
            <div className="small-lr-card lr-card">
                <img className="lr-card-photo" src="./imgs/obi-wan.jpeg" alt="Old Obi-Wan Kenobi with lightsaber" />
                <div className="lr-card-details">
                    <div className="lr-card-title"><a  className="heading-starwars text-highlight " href="./character">Obi-Wan Kenobi</a></div>
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
  )
};
