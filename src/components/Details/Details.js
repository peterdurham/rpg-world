import React from 'react';
import '../../sass/main.scss';

import BaldursGateII from '../../img/covers/Baldur\'s_Gate II-_Shadows_of_Amn.png';
import BaldursGateIIFull from '../../img/fullsize/Baldur\'s_Gate_II-_Shadows_of_Amn.jpg';
import BaldursGate from '../../img/covers/Baldur\'s_Gate.png';
import BaldursGateFull from '../../img/fullsize/Baldurs_Gate.jpg';
import Bastion from '../../img/covers/Bastion.png';
import BastionFull from '../../img/covers/Bastion.png';
import Bloodborne from '../../img/covers/Bloodborne.png';
import BloodborneFull from '../../img/fullsize/Bloodborne.jpg';
import CastlevaniaSymphony from '../../img/covers/Castlevania_Symphony_of_the_Night.png';
import CastlevaniaSymphonyFull from '../../img/fullsize/Castlevania-_Symphony_of_the_Night.jpg';
import ChronoCross from '../../img/covers/Chrono_Cross.png';
import ChronoCrossFull from '../../img/fullsize/Chrono_Cross.jpg';
import ChronoTrigger from '../../img/covers/Chrono_Trigger.png';
import ChronoTriggerFull from '../../img/fullsize/Chrono_Trigger.jpg';
import DarkSoulsII from '../../img/covers/Dark_Souls_II.png';
import DarkSoulsIIFull from '../../img/fullsize/Dark_Souls_II.jpg';
import DarkSoulsIII from '../../img/covers/Dark_Souls_III.png';
import DarkSoulsIIIFull from '../../img/fullsize/Dark_Souls_III.jpg';
import DemonSouls from '../../img/covers/Demon_Souls.png';
import DemonSoulsFull from '../../img/fullsize/Demon_Souls.jpg';
import Diablo from '../../img/covers/Diablo.png';
import DiabloFull from '../../img/fullsize/Diablo.jpg';
import DivinityOriginalSin from '../../img/covers/Divinity-_Original_Sin.png';
import DivinityOriginalSinFull from '../../img/fullsize/Divinity-_Original_Sin.jpg';
import DivinityOriginalSinII from '../../img/covers/Divinity-_Original_Sin_II.png';
import DivinityOriginalSinIIFull from '../../img/fullsize/Divinity-_Original_Sin_II.jpg';
import FableII from '../../img/covers/Fable_II.png';
import FableIIFull from '../../img/fullsize/Fable_2.jpg';
import Fallout3 from '../../img/covers/Fallout_3.png';
import Fallout3Full from '../../img/fullsize/Fallout_3.jpg';
import FinalFantasyIX from '../../img/covers/Final_Fantasy_IX.png';
import FinalFantasyIXFull from '../../img/fullsize/Final_Fantasy_IX.jpg';
import FinalFantasyVII from '../../img/covers/Final_Fantasy_VII.png';
import FinalFantasyVIIFull from '../../img/fullsize/Final_Fantasy_VII.jpg';
import FinalFantasyVIII from '../../img/covers/Final_Fantasy_VIII.png';
import FinalFantasyVIIIFull from '../../img/fullsize/Final_Fantasy_VIII.jpg';
import FinalFantasyX from '../../img/covers/Final_Fantasy_X.png';
import FinalFantasyXFull from '../../img/fullsize/Final_Fantasy_X.jpg';
import FinalFantasyXII from '../../img/covers/Final_Fantasy_XII.png';
import FinalFantasyXIIFull from '../../img/fullsize/Final_Fantasy_XII.jpg';
import GuildWars2 from '../../img/covers/Guild_Wars_2.png';
import GuildWars2Full from '../../img/fullsize/Guild_Wars_2.jpg';
import MassEffect2 from '../../img/covers/Mass_Effect_2.png';
import MassEffect2Full from '../../img/fullsize/Mass_Effect_2.jpg';
import MassEffect3 from '../../img/covers/Mass_Effect_3.png';
import MassEffect3Full from '../../img/fullsize/Mass_Effect_3.jpg';
import MonsterHunterWorld from '../../img/covers/Monster_Hunter_World.png';
import MonsterHunterWorldFull from '../../img/fullsize/Monster_Hunter-_World.jpg';
import PillarsofEternity from '../../img/covers/Pillars_of_Eternity.png';
import PillarsofEternityFull from '../../img/fullsize/Pillars_of_Eternity.jpg';
import KnightsoftheOldRepublic from '../../img/covers/Star_Wars-_Knights_of_the_Old_Republic.png';
import KnightsoftheOldRepublicFull from '../../img/fullsize/Star_Wars-_Knights_of_the_Old_Republic.jpg';
import Morrowind from '../../img/covers/The_Elder_Scrolls_III-_Morrowind.png';
import MorrowindFull from '../../img/fullsize/The_Elder_Scrolls III-_Morrowind.jpg';
import Oblivion from '../../img/covers/The_Elder_Scrolls_IV-_Oblivion.png';
import OblivionFull from '../../img/fullsize/The_Elder_Scrolls_IV-_Oblivion.jpg';
import Skyrim from '../../img/covers/The_Elder_Scrolls_V-_Skyrim.png';
import SkyrimFull from '../../img/fullsize/The_Elder_Scrolls_V-_Skyrim.jpg';
import TheWitcher3 from '../../img/covers/The_Witcher_3-_Wild_Hunt.png';
import TheWitcher3Full from '../../img/fullsize/The_Witcher_3-_Wild_Hunt.jpg';
import VagrantStory from '../../img/covers/Vagrant_Story.png';
import VagrantStoryFull from '../../img/fullsize/Vagrant_Story.jpg';
import WorldofWarcraft from '../../img/covers/World_of_Warcraft.png';
import WorldofWarcraftFull from '../../img/fullsize/World_of_Warcraft.jpg';
import XenobladeChronicles from '../../img/covers/Xenoblade_Chronicles.png';
import XenobladeChroniclesFull from '../../img/fullsize/Xenoblade_Chronicles.jpg';

const Details = (props) => {
    let selected = props.games.filter((game)=>game.title === props.selectedGame);
    
    
    let img;
    let full;
    if(selected[0].title === "Mass Effect 2") {
        img = MassEffect2;
        full = MassEffect2Full;
    } else if(selected[0].title === "The Elder Scrolls V: Skyrim"){
        img = Skyrim;
        full = SkyrimFull;
    } else if(selected[0].title === "Baldur's Gate"){
        img = BaldursGate;
        full = BaldursGateFull;
    } else if(selected[0].title === "Divinity: Original Sin II"){
        img = DivinityOriginalSinII;
        full = DivinityOriginalSinIIFull;
    } else if(selected[0].title === "Final Fantasy IX"){
        img = FinalFantasyIX;
        full = FinalFantasyIXFull;
    } else if(selected[0].title === "Chrono Cross"){
        img = ChronoCross;
        full = ChronoCrossFull;
    } else if(selected[0].title === "The Elder Scrolls IV: Oblivion"){
        img = Oblivion;
        full = OblivionFull;
    } else if(selected[0].title === "Divinity: Original Sin"){
        img = DivinityOriginalSin;
        full = DivinityOriginalSinFull;
    } else if(selected[0].title === "Diablo"){
        img = Diablo;
        full = DiabloFull;
    } else if(selected[0].title === "Bastion"){
        img = Bastion;
        full = BastionFull;
    } else if(selected[0].title === "Star Wars: Knights of the Old Republic"){
        img = KnightsoftheOldRepublic;
        full = KnightsoftheOldRepublicFull;
    } else if(selected[0].title === "The Witcher 3: Wild Hunt"){
        img = TheWitcher3;
        full = TheWitcher3Full;
    } else if(selected[0].title === "Mass Effect 3"){
        img = MassEffect3;
        full = MassEffect3Full;
    } else if(selected[0].title === "World of Warcraft"){
        img = WorldofWarcraft;
        full = WorldofWarcraftFull;
    } else if(selected[0].title === "BloodBorne"){
        img = Bloodborne;
        full = BloodborneFull;
    } else if(selected[0].title === "Vagrant Story"){
        img = VagrantStory;
        full = VagrantStoryFull;
    } else if(selected[0].title === "Final Fantasy XII"){
        img = FinalFantasyXII;
        full = FinalFantasyXIIFull;
    } else if(selected[0].title === "Final Fantasy X"){
        img = FinalFantasyX;
        full = FinalFantasyXFull;
    } else if(selected[0].title === "Final Fantasy VII"){
        img = FinalFantasyVII;
        full = FinalFantasyVIIFull;
    } else if(selected[0].title === "Chrono Trigger"){
        img = ChronoTrigger;
        full = ChronoTriggerFull;
    } else if(selected[0].title === "Xenoblade Chronicles"){
        img = XenobladeChronicles;
        full = XenobladeChroniclesFull;
    } else if(selected[0].title === "Dark Souls II"){
        img = DarkSoulsII;
        full = DarkSoulsIIFull;
    } else if(selected[0].title === "Baldur's Gate II: Shadows_of_Amn"){
        img = BaldursGateII;
        full = BaldursGateIIFull;
    } else if(selected[0].title === "Monster Hunter: World"){
        img = MonsterHunterWorld;
        full = MonsterHunterWorldFull;
    } else if(selected[0].title === "Guild Wars 2"){
        img = GuildWars2;
        full = GuildWars2Full;
    } else if(selected[0].title === "Final Fantasy VIII"){
        img = FinalFantasyVIII;
        full = FinalFantasyVIIIFull;
    } else if(selected[0].title === "Dark Souls III"){
        img = DarkSoulsIII;
        full = DarkSoulsIIIFull;
    } else if(selected[0].title === "Demon Souls"){
        img = DemonSouls;
        full = DemonSoulsFull;
    } else if(selected[0].title === "Pillars of Eternity"){
        img = PillarsofEternity;
        full = PillarsofEternityFull;
    } else if(selected[0].title === "Castlevania: Symphony of the Night"){
        img = CastlevaniaSymphony;
        full = CastlevaniaSymphonyFull;
    } else if(selected[0].title === "The Elder Scrolls III: Morrowind"){
        img = Morrowind;
        full = MorrowindFull;
    } else if(selected[0].title === "Fable II"){
        img = FableII;
        full = FableIIFull;
    } else if(selected[0].title === "Fallout 3"){
        img = Fallout3;
        full = Fallout3Full;
    }
    
    let cartButton = (props.shoppingCart.indexOf(selected[0].title)> -1) ?
    <div className="Details__addToCart--view" >View Cart</div> :
    <div className="Details__addToCart--add" onClick={()=>props.addToCart(selected[0].title)}>Add to Cart</div>

    return(
        <div className="Details">
            <div className="Details__title">{selected[0].title} {selected[0].platforms}</div>
           
            <div className="Details__info">{selected[0].developer} | {selected[0].genre} | {selected[0].release}</div>
            <div className="Details__content">
                <img src={img} alt="cover" className="Details__coverimg"/>
                <div className="Details__score">Score: {selected[0].score}</div>
                <div className="Details__addToCart">
                    <div className="Details__price">{selected[0].price}</div>
                    {cartButton}
                </div>
            </div>
            <div className="Details__summary--label">Summary:</div>
            <div className="Details__summary">{selected[0].summary}</div>
            <img className="Details__fullsize" src={full} alt="fullsize" />
        </div>
    );
}

export default Details;