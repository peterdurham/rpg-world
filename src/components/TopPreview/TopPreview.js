import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../sass/main.scss";

import BaldursGate from "../../img/covers/Baldur's_Gate.png";
import ChronoTrigger from "../../img/covers/Chrono_Trigger.png";
import FinalFantasyIX from "../../img/covers/Final_Fantasy_IX.png";
import FinalFantasyVII from "../../img/covers/Final_Fantasy_VII.png";
import FinalFantasyVIII from "../../img/covers/Final_Fantasy_VIII.png";
import FinalFantasyX from "../../img/covers/Final_Fantasy_X.png";
import MassEffect2 from "../../img/covers/Mass_Effect_2.png";
import KnightsoftheOldRepublic from "../../img/covers/Star_Wars-_Knights_of_the_Old_Republic.png";
import VagrantStory from "../../img/covers/Vagrant_Story.png";
import XenobladeChronicles from "../../img/covers/Xenoblade_Chronicles.png";

const TopPreview = ({ title, viewDetails, date, platforms, id }) => {
  let img;
  switch (title) {
    case "Baldur's Gate":
      img = BaldursGate;
      break;
    case "Chrono Trigger":
      img = ChronoTrigger;
      break;
    case "Final Fantasy IX":
      img = FinalFantasyIX;
      break;
    case "Final Fantasy VII":
      img = FinalFantasyVII;
      break;
    case "Final Fantasy VIII":
      img = FinalFantasyVIII;
      break;
    case "Final Fantasy X":
      img = FinalFantasyX;
      break;
    case "Mass Effect 2":
      img = MassEffect2;
      break;
    case "Star Wars: Knights of the Old Republic":
      img = KnightsoftheOldRepublic;
      break;
    case "Vagrant Story":
      img = VagrantStory;
      break;
    case "Xenoblade Chronicles":
      img = XenobladeChronicles;
      break;
    default:
      break;
  }

  return (
    <Link className="TopPreview" to={`/details/:${id}`}>
      <img src={img} alt="preview" className="TopPreview__img" />
      <div className="TopPreview__content">
        <div className="TopPreview__title">{title}</div>
        <div className="TopPreview__date">Release Date: {date}</div>
        <div className="TopPreview__platforms">Platforms: {platforms}</div>
      </div>
    </Link>
  );
};
TopPreview.propTypes = {
  title: PropTypes.string.isRequired,
  viewDetails: PropTypes.func.isRequired,
  date: PropTypes.string,
  platform: PropTypes.array,
  id: PropTypes.number.isRequired
};

export default TopPreview;
