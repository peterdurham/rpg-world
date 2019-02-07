import React from "react";
import PropTypes from "prop-types";
import "../../../sass/main.scss";

import BaldursGateII from "../../../img/covers/Baldur's_Gate II-_Shadows_of_Amn.png";

import BaldursGate from "../../../img/covers/Baldur's_Gate.png";
import Bastion from "../../../img/covers/Bastion.png";
import Bloodborne from "../../../img/covers/Bloodborne.png";
import CastlevaniaSymphony from "../../../img/covers/Castlevania_Symphony_of_the_Night.png";
import ChronoCross from "../../../img/covers/Chrono_Cross.png";
import ChronoTrigger from "../../../img/covers/Chrono_Trigger.png";
import DarkSoulsII from "../../../img/covers/Dark_Souls_II.png";
import DarkSoulsIII from "../../../img/covers/Dark_Souls_III.png";
import DemonSouls from "../../../img/covers/Demon_Souls.png";
import Diablo from "../../../img/covers/Diablo.png";
import DivinityOriginalSin from "../../../img/covers/Divinity-_Original_Sin.png";
import DivinityOriginalSinII from "../../../img/covers/Divinity-_Original_Sin_II.png";
import FableII from "../../../img/covers/Fable_II.png";
import Fallout3 from "../../../img/covers/Fallout_3.png";
import FinalFantasyIX from "../../../img/covers/Final_Fantasy_IX.png";
import FinalFantasyVII from "../../../img/covers/Final_Fantasy_VII.png";
import FinalFantasyVIII from "../../../img/covers/Final_Fantasy_VIII.png";
import FinalFantasyX from "../../../img/covers/Final_Fantasy_X.png";
import FinalFantasyXII from "../../../img/covers/Final_Fantasy_XII.png";
import GuildWars2 from "../../../img/covers/Guild_Wars_2.png";
import MassEffect2 from "../../../img/covers/Mass_Effect_2.png";
import MassEffect3 from "../../../img/covers/Mass_Effect_3.png";
import MonsterHunterWorld from "../../../img/covers/Monster_Hunter_World.png";
import PillarsofEternity from "../../../img/covers/Pillars_of_Eternity.png";
import KnightsoftheOldRepublic from "../../../img/covers/Star_Wars-_Knights_of_the_Old_Republic.png";
import Morrowind from "../../../img/covers/The_Elder_Scrolls_III-_Morrowind.png";
import Oblivion from "../../../img/covers/The_Elder_Scrolls_IV-_Oblivion.png";
import Skyrim from "../../../img/covers/The_Elder_Scrolls_V-_Skyrim.png";
import TheWitcher3 from "../../../img/covers/The_Witcher_3-_Wild_Hunt.png";
import VagrantStory from "../../../img/covers/Vagrant_Story.png";
import WorldofWarcraft from "../../../img/covers/World_of_Warcraft.png";
import XenobladeChronicles from "../../../img/covers/Xenoblade_Chronicles.png";

const CartItem = ({ title, game, removeFromCart }) => {
  let img;

  switch (title) {
    case "Mass Effect 2":
      img = MassEffect2;
      break;
    case "The Elder Scrolls V: Skyrim":
      img = Skyrim;
      break;
    case "Baldur's Gate":
      img = BaldursGate;
      break;
    case "Divinity: Original Sin II":
      img = DivinityOriginalSinII;
      break;
    case "Final Fantasy IX":
      img = FinalFantasyIX;
      break;
    case "Chrono Cross":
      img = ChronoCross;
      break;
    case "The Elder Scrolls IV: Oblivion":
      img = Oblivion;
      break;
    case "Divinity: Original Sin":
      img = DivinityOriginalSin;
      break;
    case "Diablo":
      img = Diablo;
      break;
    case "Bastion":
      img = Bastion;
      break;
    case "Star Wars: Knights of the Old Republic":
      img = KnightsoftheOldRepublic;
      break;
    case "The Witcher 3: Wild Hunt":
      img = TheWitcher3;
      break;
    case "Mass Effect 3":
      img = MassEffect3;
      break;
    case "World of Warcraft":
      img = WorldofWarcraft;
      break;
    case "BloodBorne":
      img = Bloodborne;
      break;
    case "Vagrant Story":
      img = VagrantStory;
      break;
    case "Final Fantasy XII":
      img = FinalFantasyXII;
      break;
    case "Final Fantasy X":
      img = FinalFantasyX;
      break;
    case "Final Fantasy VII":
      img = FinalFantasyVII;
      break;
    case "Chrono Trigger":
      img = ChronoTrigger;
      break;
    case "Xenoblade Chronicles":
      img = XenobladeChronicles;
      break;
    case "Dark Souls II":
      img = DarkSoulsII;
      break;
    case "Baldur's Gate II: Shadows_of_Amn":
      img = BaldursGateII;
      break;
    case "Monster Hunter: World":
      img = MonsterHunterWorld;
      break;
    case "Guild Wars 2":
      img = GuildWars2;
      break;
    case "Final Fantasy VIII":
      img = FinalFantasyVIII;
      break;
    case "Dark Souls III":
      img = DarkSoulsIII;
      break;
    case "Demon Souls":
      img = DemonSouls;
      break;
    case "Pillars of Eternity":
      img = PillarsofEternity;
      break;
    case "Castlevania: Symphony of the Night":
      img = CastlevaniaSymphony;
      break;
    case "The Elder Scrolls III: Morrowind":
      img = Morrowind;
      break;
    case "Fable II":
      img = FableII;
      break;
    case "Fallout 3":
      img = Fallout3;
      break;

    default:
      break;
  }

  return (
    <div className="CartItem">
      <div className="CartItem__container">
        <div className="CartItem__left">
          <img src={img} alt="cover" className="CartItem__img" />
          <div className="CartItem__title">{title}</div>
        </div>

        <div className="CartItem__right">
          <div className="CartItem__price">${game[0].price}</div>
          <button
            className="CartItem__button"
            onClick={() => removeFromCart(title)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  game: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired
};
export default CartItem;
