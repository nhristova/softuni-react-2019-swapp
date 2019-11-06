import React from 'react';

export class Episodes extends React.Component {
  episode = {
    title: 'The Phantom Menace',
    description:
      'Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory. Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory. but the long dormant Sith resurface to claim their old glory',
    img: './imgs/episode-II-poster.jpg',
  };

  render() {
    return (
      <main className="episodes-main">
        <div className="episode-card tb-card">
          <div className="tb-card-photo">
            <img
              src="./imgs/episode-II-poster.jpg"
              alt="Poster with Natalie Portman"
            />
          </div>
          <div className="tb-card-title">
            <a className="heading-starwars text-highlight " href="./episode">
              The Phantom Menace
            </a>
          </div>
          <div className="tb-card-description">
            Two Jedi escape a hostile blockade to find allies and come across a
            young boy who may bring balance to the Force, but the long dormant
            Sith resurface to claim their old glory. Two Jedi escape a hostile
            blockade to find allies and come across a young boy who may bring
            balance to the Force, but the long dormant Sith resurface to claim
            their old glory.
          </div>
        </div>
      </main>
    );
  }
}
