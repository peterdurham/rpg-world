import React from 'react';

import '../../sass/main.scss';

import BaldursGate from '../../img/covers/Baldur\'s_Gate.png';
import ChronoTrigger from '../../img/covers/Chrono_Trigger.png';
import FinalFantasyIX from '../../img/covers/Final_Fantasy_IX.png';
import FinalFantasyVII from '../../img/covers/Final_Fantasy_VII.png';
import FinalFantasyVIII from '../../img/covers/Final_Fantasy_VIII.png';
import FinalFantasyX from '../../img/covers/Final_Fantasy_X.png';
import MassEffect2 from '../../img/covers/Mass_Effect_2.png';
import KnightsoftheOldRepublic from '../../img/covers/Star_Wars-_Knights_of_the_Old_Republic.png';
import VagrantStory from '../../img/covers/Vagrant_Story.png';
import XenobladeChronicles from '../../img/covers/Xenoblade_Chronicles.png';

const TopPreview = (props) => {
    
    let img;
    if(props.title === "Baldur's Gate") {
        img = BaldursGate;
    } else if(props.title === "Chrono Trigger"){
        img = ChronoTrigger;
    } else if(props.title === "Final Fantasy IX"){
        img = FinalFantasyIX;
    } else if(props.title === "Final Fantasy VII"){
        img = FinalFantasyVII;
    } else if(props.title === "Final Fantasy VIII"){
        img = FinalFantasyVIII;
    } else if(props.title === "Final Fantasy X"){
        img = FinalFantasyX;
    } else if(props.title === "Mass Effect 2"){
        img = MassEffect2;
    } else if(props.title === "Star Wars: Knights of the Old Republic"){
        img = KnightsoftheOldRepublic;
    } else if(props.title === "Vagrant Story"){
        img = VagrantStory;
    } else if(props.title === "Xenoblade Chronicles"){
        img = XenobladeChronicles;
    }
    
    return(
        <div className="TopPreview" onClick={() => props.viewDetails(props.title)}>
            <img src={img} alt="preview" className="TopPreview__img"/>
            <div className="TopPreview__content">
                <div className="TopPreview__title">{props.title}</div>
                <div className="TopPreview__date">Release Date: {props.date}</div>
                <div className="TopPreview__platforms">Platforms: {props.platforms}</div>
            </div>
        </div>
    );
}

export default TopPreview;