import React from 'react';
import '../../sass/main.scss';

import BaldursGateII from '../../img/covers/Baldur\'s_Gate II-_Shadows_of_Amn.png';
import BaldursGate from '../../img/covers/Baldur\'s_Gate.png';
import Bastion from '../../img/covers/Bastion.png';
import Bloodborne from '../../img/covers/Bloodborne.png';
import CastlevaniaSymphony from '../../img/covers/Castlevania_Symphony_of_the_Night.png';
import ChronoCross from '../../img/covers/Chrono_Cross.png';
import ChronoTrigger from '../../img/covers/Chrono_Trigger.png';
import DarkSoulsII from '../../img/covers/Dark_Souls_II.png';
import DarkSoulsIII from '../../img/covers/Dark_Souls_III.png';
import DemonSouls from '../../img/covers/Demon_Souls.png';
import Diablo from '../../img/covers/Diablo.png';
import DivinityOriginalSin from '../../img/covers/Divinity-_Original_Sin.png';
import DivinityOriginalSinII from '../../img/covers/Divinity-_Original_Sin_II.png';
import FableII from '../../img/covers/Fable_II.png';
import Fallout3 from '../../img/covers/Fallout_3.png';
import FinalFantasyIX from '../../img/covers/Final_Fantasy_IX.png';
import FinalFantasyVII from '../../img/covers/Final_Fantasy_VII.png';
import FinalFantasyVIII from '../../img/covers/Final_Fantasy_VIII.png';
import FinalFantasyX from '../../img/covers/Final_Fantasy_X.png';
import FinalFantasyXII from '../../img/covers/Final_Fantasy_XII.png';
import GuildWars2 from '../../img/covers/Guild_Wars_2.png';
import MassEffect2 from '../../img/covers/Mass_Effect_2.png';
import MassEffect3 from '../../img/covers/Mass_Effect_3.png';
import MonsterHunterWorld from '../../img/covers/Monster_Hunter_World.png';
import PillarsofEternity from '../../img/covers/Pillars_of_Eternity.png';
import KnightsoftheOldRepublic from '../../img/covers/Star_Wars-_Knights_of_the_Old_Republic.png';
import Morrowind from '../../img/covers/The_Elder_Scrolls_III-_Morrowind.png';
import Oblivion from '../../img/covers/The_Elder_Scrolls_IV-_Oblivion.png';
import Skyrim from '../../img/covers/The_Elder_Scrolls_V-_Skyrim.png';
import TheWitcher3 from '../../img/covers/The_Witcher_3-_Wild_Hunt.png';
import VagrantStory from '../../img/covers/Vagrant_Story.png';
import WorldofWarcraft from '../../img/covers/World_of_Warcraft.png';
import XenobladeChronicles from '../../img/covers/Xenoblade_Chronicles.png';




const Preview = (props) => {
    console.log(props.platforms);
    let img;
    if(props.title === "Mass Effect 2") {
        img = MassEffect2;
    } else if(props.title === "The Elder Scrolls V: Skyrim"){
        img = Skyrim;
    } else if(props.title === "Baldur's Gate"){
        img = BaldursGate;
    } else if(props.title === "Divinity: Original Sin II"){
        img = DivinityOriginalSinII;
    } else if(props.title === "Final Fantasy IX"){
        img = FinalFantasyIX;
    } else if(props.title === "Chrono Cross"){
        img = ChronoCross;
    } else if(props.title === "The Elder Scrolls IV: Oblivion"){
        img = Oblivion;
    } else if(props.title === "Divinity: Original Sin"){
        img = DivinityOriginalSin;
    } else if(props.title === "Diablo"){
        img = Diablo;
    } else if(props.title === "Bastion"){
        img = Bastion;
    } else if(props.title === "Star Wars: Knights of the Old Republic"){
        img = KnightsoftheOldRepublic;
    } else if(props.title === "The Witcher 3: Wild Hunt"){
        img = TheWitcher3;
    } else if(props.title === "Mass Effect 3"){
        img = MassEffect3;
    } else if(props.title === "World of Warcraft"){
        img = WorldofWarcraft;
    } else if(props.title === "BloodBorne"){
        img = Bloodborne;
    } else if(props.title === "Vagrant Story"){
        img = VagrantStory;
    } else if(props.title === "Final Fantasy XII"){
        img = FinalFantasyXII;
    } else if(props.title === "Final Fantasy X"){
        img = FinalFantasyX;
    } else if(props.title === "Final Fantasy VII"){
        img = FinalFantasyVII;
    } else if(props.title === "Chrono Trigger"){
        img = ChronoTrigger;
    } else if(props.title === "Xenoblade Chronicles"){
        img = XenobladeChronicles;
    } else if(props.title === "Dark Souls II"){
        img = DarkSoulsII;
    } else if(props.title === "Baldur's Gate II: Shadows_of_Amn"){
        img = BaldursGateII;
    } else if(props.title === "Monster Hunter: World"){
        img = MonsterHunterWorld;
    } else if(props.title === "Guild Wars 2"){
        img = GuildWars2;
    } else if(props.title === "Final Fantasy VIII"){
        img = FinalFantasyVIII;
    } else if(props.title === "Dark Souls III"){
        img = DarkSoulsIII;
    } else if(props.title === "Demon Souls"){
        img = DemonSouls;
    } else if(props.title === "Pillars of Eternity"){
        img = PillarsofEternity;
    } else if(props.title === "Castlevania: Symphony of the Night"){
        img = CastlevaniaSymphony;
    } else if(props.title === "The Elder Scrolls III: Morrowind"){
        img = Morrowind;
    } else if(props.title === "Fable II"){
        img = FableII;
    }
    return(
        <div className="Preview">
            <img src={img} alt="game" className="Preview__image"/>
            <div className="Preview__content">
                <div className="Preview__title">{props.title}</div>
                <div className="Preview__platforms">{props.platforms.map(platform=>` ${platform}`)}</div>
                <div className="Preview__release">{props.release}</div>
            </div>
            <div className="Preview__score">{props.score}</div>
        </div>
    );
}

export default Preview;