import React from "react";
import PropTypes from "prop-types";
import "../../sass/main.scss";

import Carousel from "../../containers/Carousel/Carousel";
import Offers from "../../components/Store/Offers/Offers";
import Listing from "../../components/Store/Listing/Listing";
const Store = ({ games }) => {
  return (
    <div className="Store">
      <div className="Store__label">Featured</div>
      <Carousel games={games} />

      <div className="Store__label">Special Offers</div>
      <Offers games={games} />
      <div className="Store__label Store__label--rpg">All RPGs</div>
      {games.map(game => (
        <Listing
          key={game.title}
          id={game.id}
          title={game.title}
          platforms={game.platforms}
          genre={game.genre}
          price={game.price}
        />
      ))}
    </div>
  );
};
Store.propTypes = {
  games: PropTypes.array.isRequired
};
export default Store;
