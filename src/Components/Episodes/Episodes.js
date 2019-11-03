import { React } from 'react';

export class Episodes extends React.Component {
    episode = {
        title: "The Phantom Menace",
        description: "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory. Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory. but the long dormant Sith resurface to claim their old glory",
        img: "./imgs/episode-II-poster.jpg"
    };

    render() {
        return (
            <main class="episodes-main">
                <div class="episode-card tb-card">
                    <div class="tb-card-photo"><img src="./imgs/episode-II-poster.jpg" alt="Poster with Natalie Portman" />

                    </div>
                    <div class="tb-card-title"><a class="heading-starwars text-highlight " href="./episode">The Phantom Menace</a></div>
                    <div class="tb-card-description">Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory. Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.
                </div>
                </div>

                
            </main>
        );
    }
}
