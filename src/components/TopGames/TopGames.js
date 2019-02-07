import React from "react";
import PropTypes from "prop-types";
import "../../sass/main.scss";

import Preview from "../Preview/Preview";
import PC from "../../img/platforms/pc-logo.png";
import Playstation from "../../img/platforms/playstation1-logo.png";
import Playstation2 from "../../img/platforms/playstation2-logo.png";
import Playstation3 from "../../img/platforms/playstation3-logo.png";
import Playstation4 from "../../img/platforms/playstation4-logo.png";
import Xbox360 from "../../img/platforms/xbox360-logo.png";
import Xboxone from "../../img/platforms/xboxone-logo.png";
import Nintendoswitch from "../../img/platforms/nintendoswitch-logo.png";

const TopGames = ({ games, currentSort, viewDetails }) => {
  let sorted = games.sort((a, b) => b.score - a.score);
  let display;
  let icon;

  if (currentSort === "all") {
    display = sorted;
    icon = <div>All Platforms</div>;
  } else if (currentSort === "pc") {
    display = sorted.filter(game => game.platforms.indexOf("PC") > -1);
    icon = (
      <div>
        <img src={PC} alt="PC" className="TopGames__platform--image" />
      </div>
    );
  } else if (currentSort === "playstation") {
    display = sorted.filter(game => game.platforms.indexOf("PlayStation") > -1);
    icon = (
      <div>
        <img
          src={Playstation}
          alt="Playstation"
          className="TopGames__platform--image"
        />
      </div>
    );
  } else if (currentSort === "playstation2") {
    display = sorted.filter(
      game => game.platforms.indexOf("PlayStation 2") > -1
    );
    icon = (
      <div>
        <img
          src={Playstation2}
          alt="Playstation2"
          className="TopGames__platform--image"
        />
      </div>
    );
  } else if (currentSort === "playstation3") {
    display = sorted.filter(
      game => game.platforms.indexOf("PlayStation 3") > -1
    );
    icon = (
      <div>
        <img
          src={Playstation3}
          alt="Playstation3"
          className="TopGames__platform--image"
        />
      </div>
    );
  } else if (currentSort === "playstation4") {
    display = sorted.filter(
      game => game.platforms.indexOf("PlayStation 4") > -1
    );
    icon = (
      <div>
        <img
          src={Playstation4}
          alt="Playstation4"
          className="TopGames__platform--image"
        />
      </div>
    );
  } else if (currentSort === "xbox360") {
    display = sorted.filter(game => game.platforms.indexOf("Xbox 360") > -1);
    icon = (
      <div>
        <img
          src={Xbox360}
          alt="Xbox360"
          className="TopGames__platform--image"
        />
      </div>
    );
  } else if (currentSort === "xboxone") {
    display = sorted.filter(game => game.platforms.indexOf("Xbox One") > -1);
    icon = (
      <div>
        <img
          src={Xboxone}
          alt="XboxOne"
          className="TopGames__platform--image"
        />
      </div>
    );
  } else if (currentSort === "nintendoswitch") {
    display = sorted.filter(
      game => game.platforms.indexOf("Nintendo Switch") > -1
    );
    icon = (
      <div>
        <img
          src={Nintendoswitch}
          alt="PC"
          className="TopGames__platform--image"
        />
      </div>
    );
  }

  return (
    <div className="TopGames">
      <div className="TopGames__header">
        <div className="TopGames__title">Top Games</div>
        {icon}
      </div>
      <div className="TopGames__labels">
        <div className="TopGames__label--title">Title</div>
        <div className="TopGames__label--user">User Rating</div>
      </div>
      {display.map((game, index) => (
        <Preview
          key={index}
          id={game.id}
          title={game.title}
          release={game.release}
          developer={game.developer}
          genre={game.genre}
          score={game.score}
          platforms={game.platforms}
          viewDetails={viewDetails}
        />
      ))}
    </div>
  );
};
TopGames.propTypes = {
  games: PropTypes.array.isRequired,
  currentSort: PropTypes.string.isRequired
};
export default TopGames;
