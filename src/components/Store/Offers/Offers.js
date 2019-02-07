import React from "react";
import { Link } from "react-router-dom";

import "../../../sass/main.scss";

import ChronoCrossCover from "../../../img/covers/Chrono_Cross.png";
import MonsterHunterWorldCover from "../../../img/covers/Monster_Hunter_World.png";
import DemonSouls from "../../../img/fullsize/Demon_Souls.jpg";
import FinalFantasyX from "../../../img/fullsize/Final_Fantasy_X.jpg";

const Offers = () => {
  return (
    <div className="Offers">
      <Link className="Offers__left" to="/details/:6">
        <img
          src={ChronoCrossCover}
          alt="chrono cross"
          className="Offers__tallimg"
        />

        <div className="Offers__content">
          <div className="Offers__sale--title">Chrono Cross</div>
          <div className="Offers__sale">
            <div className="Offers__sale--label">-50%</div>
            <div className="Offers__sale--price">$4.99</div>
          </div>
        </div>
      </Link>
      <Link className="Offers__middle" to="/details/:25">
        <img
          src={MonsterHunterWorldCover}
          alt="bastion"
          className="Offers__tallimg"
        />
        <div className="Offers__content">
          <div className="Offers__sale--title">Monster Hunter World</div>
          <div className="Offers__sale">
            <div className="Offers__sale--label">-50%</div>
            <div className="Offers__sale--price">$4.99</div>
          </div>
        </div>
      </Link>
      <div className="Offers__right">
        <Link className="Offers__right--top" to="/details/:29">
          <img src={DemonSouls} alt="demon souls" className="Offers__wideimg" />

          <div className="Offers__content--small">
            <div className="Offers__sale--title">Demon Souls</div>
            <div className="Offers__sale">
              <div className="Offers__sale--label">-50%</div>
              <div className="Offers__sale--price">$4.99</div>
            </div>
          </div>
        </Link>
        <Link className="Offers__right--bottom" to="/details/:19">
          <img src={FinalFantasyX} alt="ffx" className="Offers__wideimg" />

          <div className="Offers__content--small">
            <div className="Offers__sale--title">Final Fantasy X</div>
            <div className="Offers__sale">
              <div className="Offers__sale--label">-50%</div>
              <div className="Offers__sale--price">$4.99</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Offers;
