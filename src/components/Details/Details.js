import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../sass/main.scss";

import BaldursGateII from "../../img/covers/Baldur's_Gate II-_Shadows_of_Amn.png";
import BaldursGateIIFull from "../../img/fullsize/Baldur's_Gate_II-_Shadows_of_Amn.jpg";
import BaldursGate from "../../img/covers/Baldur's_Gate.png";
import BaldursGateFull from "../../img/fullsize/Baldurs_Gate.jpg";
import Bastion from "../../img/covers/Bastion.png";
import BastionFull from "../../img/covers/Bastion.png";
import BloodBorne from "../../img/covers/Bloodborne.png";
import BloodBorneFull from "../../img/fullsize/Bloodborne.jpg";
import CastlevaniaSymphony from "../../img/covers/Castlevania_Symphony_of_the_Night.png";
import CastlevaniaSymphonyFull from "../../img/fullsize/Castlevania-_Symphony_of_the_Night.jpg";
import ChronoCross from "../../img/covers/Chrono_Cross.png";
import ChronoCrossFull from "../../img/fullsize/Chrono_Cross.jpg";
import ChronoTrigger from "../../img/covers/Chrono_Trigger.png";
import ChronoTriggerFull from "../../img/fullsize/Chrono_Trigger.jpg";
import DarkSoulsII from "../../img/covers/Dark_Souls_II.png";
import DarkSoulsIIFull from "../../img/fullsize/Dark_Souls_II.jpg";
import DarkSoulsIII from "../../img/covers/Dark_Souls_III.png";
import DarkSoulsIIIFull from "../../img/fullsize/Dark_Souls_III.jpg";
import DemonSouls from "../../img/covers/Demon_Souls.png";
import DemonSoulsFull from "../../img/fullsize/Demon_Souls.jpg";
import Diablo from "../../img/covers/Diablo.png";
import DiabloFull from "../../img/fullsize/Diablo.jpg";
import DivinityOriginalSin from "../../img/covers/Divinity-_Original_Sin.png";
import DivinityOriginalSinFull from "../../img/fullsize/Divinity-_Original_Sin.jpg";
import DivinityOriginalSinII from "../../img/covers/Divinity-_Original_Sin_II.png";
import DivinityOriginalSinIIFull from "../../img/fullsize/Divinity-_Original_Sin_II.jpg";
import FableII from "../../img/covers/Fable_II.png";
import FableIIFull from "../../img/fullsize/Fable_2.jpg";
import Fallout3 from "../../img/covers/Fallout_3.png";
import Fallout3Full from "../../img/fullsize/Fallout_3.jpg";
import FinalFantasyIX from "../../img/covers/Final_Fantasy_IX.png";
import FinalFantasyIXFull from "../../img/fullsize/Final_Fantasy_IX.jpg";
import FinalFantasyVII from "../../img/covers/Final_Fantasy_VII.png";
import FinalFantasyVIIFull from "../../img/fullsize/Final_Fantasy_VII.jpg";
import FinalFantasyVIII from "../../img/covers/Final_Fantasy_VIII.png";
import FinalFantasyVIIIFull from "../../img/fullsize/Final_Fantasy_VIII.jpg";
import FinalFantasyX from "../../img/covers/Final_Fantasy_X.png";
import FinalFantasyXFull from "../../img/fullsize/Final_Fantasy_X.jpg";
import FinalFantasyXII from "../../img/covers/Final_Fantasy_XII.png";
import FinalFantasyXIIFull from "../../img/fullsize/Final_Fantasy_XII.jpg";
import GuildWars2 from "../../img/covers/Guild_Wars_2.png";
import GuildWars2Full from "../../img/fullsize/Guild_Wars_2.jpg";
import MassEffect2 from "../../img/covers/Mass_Effect_2.png";
import MassEffect2Full from "../../img/fullsize/Mass_Effect_2.jpg";
import MassEffect3 from "../../img/covers/Mass_Effect_3.png";
import MassEffect3Full from "../../img/fullsize/Mass_Effect_3.jpg";
import MonsterHunterWorld from "../../img/covers/Monster_Hunter_World.png";
import MonsterHunterWorldFull from "../../img/fullsize/Monster_Hunter-_World.jpg";
import PillarsofEternity from "../../img/covers/Pillars_of_Eternity.png";
import PillarsofEternityFull from "../../img/fullsize/Pillars_of_Eternity.jpg";
import KnightsoftheOldRepublic from "../../img/covers/Star_Wars-_Knights_of_the_Old_Republic.png";
import KnightsoftheOldRepublicFull from "../../img/fullsize/Star_Wars-_Knights_of_the_Old_Republic.jpg";
import Morrowind from "../../img/covers/The_Elder_Scrolls_III-_Morrowind.png";
import MorrowindFull from "../../img/fullsize/The_Elder_Scrolls III-_Morrowind.jpg";
import Oblivion from "../../img/covers/The_Elder_Scrolls_IV-_Oblivion.png";
import OblivionFull from "../../img/fullsize/The_Elder_Scrolls_IV-_Oblivion.jpg";
import Skyrim from "../../img/covers/The_Elder_Scrolls_V-_Skyrim.png";
import SkyrimFull from "../../img/fullsize/The_Elder_Scrolls_V-_Skyrim.jpg";
import TheWitcher3 from "../../img/covers/The_Witcher_3-_Wild_Hunt.png";
import TheWitcher3Full from "../../img/fullsize/The_Witcher_3-_Wild_Hunt.jpg";
import VagrantStory from "../../img/covers/Vagrant_Story.png";
import VagrantStoryFull from "../../img/fullsize/Vagrant_Story.jpg";
import WorldofWarcraft from "../../img/covers/World_of_Warcraft.png";
import WorldofWarcraftFull from "../../img/fullsize/World_of_Warcraft.jpg";
import XenobladeChronicles from "../../img/covers/Xenoblade_Chronicles.png";
import XenobladeChroniclesFull from "../../img/fullsize/Xenoblade_Chronicles.jpg";

const Details = props => {
  const { games, shoppingCart, addToCart } = props;

  let id = Number(props.match.params.id.replace(/:/g, ""));

  let img;
  let full;

  switch (id) {
    case 1:
      img = MassEffect2;
      full = MassEffect2Full;
      break;
    case 2:
      img = Skyrim;
      full = SkyrimFull;
      break;
    case 3:
      img = BaldursGate;
      full = BaldursGateFull;
      break;
    case 4:
      img = DivinityOriginalSinII;
      full = DivinityOriginalSinIIFull;
      break;
    case 5:
      img = FinalFantasyIX;
      full = FinalFantasyIXFull;
      break;
    case 6:
      img = ChronoCross;
      full = ChronoCrossFull;
      break;
    case 7:
      img = Oblivion;
      full = OblivionFull;
      break;
    case 8:
      img = DivinityOriginalSin;
      full = DivinityOriginalSinFull;
      break;
    case 9:
      img = Diablo;
      full = DiabloFull;
      break;
    case 10:
      img = Bastion;
      full = BastionFull;
      break;
    case 11:
      img = KnightsoftheOldRepublic;
      full = KnightsoftheOldRepublicFull;
      break;
    case 12:
      img = TheWitcher3;
      full = TheWitcher3Full;
      break;
    case 13:
      img = Fallout3;
      full = Fallout3Full;
      break;
    case 14:
      img = MassEffect3;
      full = MassEffect3Full;
      break;
    case 15:
      img = WorldofWarcraft;
      full = WorldofWarcraftFull;
      break;
    case 16:
      img = BloodBorne;
      full = BloodBorneFull;
      break;
    case 17:
      img = VagrantStory;
      full = VagrantStoryFull;
      break;
    case 18:
      img = FinalFantasyXII;
      full = FinalFantasyXIIFull;
      break;
    case 19:
      img = FinalFantasyX;
      full = FinalFantasyXFull;
      break;
    case 20:
      img = FinalFantasyVII;
      full = FinalFantasyVIIFull;
      break;
    case 21:
      img = ChronoTrigger;
      full = ChronoTriggerFull;
      break;
    case 22:
      img = XenobladeChronicles;
      full = XenobladeChroniclesFull;
      break;
    case 23:
      img = DarkSoulsII;
      full = DarkSoulsIIFull;
      break;
    case 24:
      img = BaldursGateII;
      full = BaldursGateIIFull;
      break;
    case 25:
      img = MonsterHunterWorld;
      full = MonsterHunterWorldFull;
      break;
    case 26:
      img = GuildWars2;
      full = GuildWars2Full;
      break;
    case 27:
      img = FinalFantasyVIII;
      full = FinalFantasyVIIIFull;
      break;
    case 28:
      img = DarkSoulsIII;
      full = DarkSoulsIIIFull;
      break;
    case 29:
      img = DemonSouls;
      full = DemonSoulsFull;
      break;
    case 30:
      img = PillarsofEternity;
      full = PillarsofEternityFull;
      break;
    case 31:
      img = CastlevaniaSymphony;
      full = CastlevaniaSymphonyFull;
      break;
    case 32:
      img = Morrowind;
      full = MorrowindFull;
      break;
    case 33:
      img = FableII;
      full = FableIIFull;
      break;

    default:
      break;
  }

  let selected = games.filter(game => Number(game.id) === Number(id))[0];

  let cartButton;

  if (selected) {
    cartButton =
      shoppingCart.indexOf(selected.title) > -1 ? (
        <Link className="Details__addToCart--view" to="/cart">
          View Cart
        </Link>
      ) : (
        <div
          className="Details__addToCart--add"
          onClick={() => addToCart(selected.title)}
        >
          Add to Cart
        </div>
      );
  }

  return (
    <div className="Details">
      {selected && (
        <div className="Details__container">
          <div className="Details__title">{selected.title}</div>
          <div className="Details__platforms">
            {selected.platforms.map(platform => ` ${platform}`)}
          </div>
          <div className="Details__info">
            {selected.developer} | {selected.genre} | {selected.release}
          </div>
          <div className="Details__content">
            <img src={img} alt="cover" className="Details__coverimg" />
            <div className="Details__score">Score: {selected.score}</div>
            <div className="Details__addToCart">
              <div className="Details__price">${selected.price}</div>
              {cartButton}
            </div>
          </div>
          <div className="Details__summary--label">Summary:</div>
          <div className="Details__summary">{selected.summary}</div>
          <img className="Details__fullsize" src={full} alt="fullsize" />
        </div>
      )}
    </div>
  );
};
Details.propTypes = {
  games: PropTypes.array.isRequired,
  shoppingCart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
};
export default Details;
