import React from 'react';
import '../../sass/main.scss';

import Preview from '../Preview/Preview';

const TopGames = (props) => {
    // let topGames = props.games.sort((a,b)=>a.score > b.score);
    // console.log(topGames);
    return(
        <div className="TopGames">
            Top Games
            {props.games.map((game,index)=><Preview 
                key={index}
                title={game.title}
                release={game.release}
                developer={game.developer}
                genre={game.genre}
                score={game.score}
                platforms={game.platforms}
            />)}
        </div>
    );
}

export default TopGames;