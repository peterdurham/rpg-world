import React from 'react';
import '../../sass/main.scss';

import Preview from '../Preview/Preview';
import PC from '../../img/platforms/pc-logo.png';
import Playstation from '../../img/platforms/playstation1-logo.png';
import Playstation2 from '../../img/platforms/playstation2-logo.png';
import Playstation3 from '../../img/platforms/playstation3-logo.png';
import Playstation4 from '../../img/platforms/playstation4-logo.png';
import Xbox360 from '../../img/platforms/xbox360-logo.png';
import Xboxone from '../../img/platforms/xboxone-logo.png';
import Nintendoswitch from '../../img/platforms/nintendoswitch-logo.png';

const TopGames = (props) => {
    let sorted = props.games.sort((a,b)=>b.score - a.score);
    let display;
    let icon;

    if(props.currentSort[0] === true){
        display = sorted;
        icon = <div>ALL</div>
    } else if(props.currentSort[1]=== true){
        display = sorted.filter((game)=>game.platforms.indexOf("PC") > -1);
        icon = <div><img src={PC} alt="PC" className="TopGames__platform--image"/></div>
    } else if(props.currentSort[2]=== true){
        display = sorted.filter((game)=>game.platforms.indexOf("PlayStation") > -1);
        icon = <div><img src={Playstation} alt="Playstation" className="TopGames__platform--image"/></div>
    } else if(props.currentSort[3]=== true){
        display = sorted.filter((game)=>game.platforms.indexOf("PlayStation 2") > -1);
        icon = <div><img src={Playstation2} alt="Playstation2" className="TopGames__platform--image"/></div>
    } else if(props.currentSort[4]=== true){
        display = sorted.filter((game)=>game.platforms.indexOf("PlayStation 3") > -1);
        icon = <div><img src={Playstation3} alt="Playstation3" className="TopGames__platform--image"/></div>
    } else if(props.currentSort[5]=== true){
        display = sorted.filter((game)=>game.platforms.indexOf("PlayStation 4") > -1);
        icon = <div><img src={Playstation4} alt="Playstation4" className="TopGames__platform--image"/></div>
    } else if(props.currentSort[6]=== true){
        display = sorted.filter((game)=>game.platforms.indexOf("Xbox 360") > -1);
        icon = <div><img src={Xbox360} alt="Xbox360" className="TopGames__platform--image"/></div>
    } else if(props.currentSort[7]=== true){
        display = sorted.filter((game)=>game.platforms.indexOf("Xbox One") > -1);
        icon = <div><img src={Xboxone} alt="XboxOne" className="TopGames__platform--image"/></div>
    } else if(props.currentSort[8]=== true){
        display = sorted.filter((game)=>game.platforms.indexOf("Nintendo Switch") > -1);
        icon = <div><img src={Nintendoswitch} alt="PC" className="TopGames__platform--image"/></div>
    } 

   



    return(
        <div className="TopGames">
            Top Games
            <div className="TopGames__platforms">
            {icon}
            
            </div>
            {display.map((game,index)=><Preview 
                key={index}
                title={game.title}
                release={game.release}
                developer={game.developer}
                genre={game.genre}
                score={game.score}
                platforms={game.platforms}
                viewDetails = {props.viewDetails}
            />)}
        </div>
    );
}

export default TopGames;