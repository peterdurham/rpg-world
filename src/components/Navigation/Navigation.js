import React from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../sass/main.scss";

const Navigation = ({ shoppingCart, selectPlatformSort }) => {
  let cart =
    shoppingCart.length === 0 ? (
      <NavLink
        to="/cart"
        className="Navigation__item"
        activeClassName="Navigation__item--active"
      >
        Cart
      </NavLink>
    ) : (
      <NavLink
        to="/cart"
        className="Navigation__item"
        activeClassName="Navigation__item--active"
      >
        Cart {shoppingCart.length}
      </NavLink>
    );

  return (
    <div className="Navigation">
      <NavLink
        to="/"
        exact
        className="Navigation__item"
        activeClassName="Navigation__item--active"
      >
        RPG World
      </NavLink>
      <NavLink
        to="/reviews"
        className="Navigation__item"
        activeClassName="Navigation__item--active"
      >
        Reviews
      </NavLink>

      <div className="dropdown">
        <NavLink
          to="/topgames/all"
          className="Navigation__item"
          activeClassName="Navigation__item--active"
        >
          Top Games<span className="Navigation__icon">&#9660;</span>
        </NavLink>
        <div className="dropdown-content">
          <div onClick={() => selectPlatformSort("all")}>
            <Link to="/topgames/all" className="dropdown-selection">
              All Platforms
            </Link>
          </div>
          <div onClick={() => selectPlatformSort("pc")}>
            <Link to="/topgames/pc" className="dropdown-selection">
              PC
            </Link>
          </div>
          <div onClick={() => selectPlatformSort("playstation")}>
            <Link to="/topgames/playstation" className="dropdown-selection">
              PlayStation
            </Link>
          </div>
          <div onClick={() => selectPlatformSort("playstation2")}>
            <Link to="/topgames/playstation2" className="dropdown-selection">
              PlayStation 2
            </Link>
          </div>
          <div onClick={() => selectPlatformSort("playstation3")}>
            <Link to="/topgames/playstation3" className="dropdown-selection">
              PlayStation 3
            </Link>
          </div>
          <div onClick={() => selectPlatformSort("playstation4")}>
            <Link to="/topgames/playstation4" className="dropdown-selection">
              PlayStation 4
            </Link>
          </div>
          <div onClick={() => selectPlatformSort("xbox360")}>
            <Link to="/topgames/xbox360" className="dropdown-selection">
              Xbox 360
            </Link>
          </div>
          <div onClick={() => selectPlatformSort("xboxone")}>
            <Link to="/topgames/xboxone" className="dropdown-selection">
              Xbox One
            </Link>
          </div>
          <div onClick={() => selectPlatformSort("nintendoswitch")}>
            <Link to="/topgames/nintendoswitch" className="dropdown-selection">
              Nintendo Switch
            </Link>
          </div>
        </div>
      </div>

      <NavLink
        to="/store"
        activeClassName="Navigation__item--active"
        className="Navigation__item"
      >
        Store
      </NavLink>
      {cart}
    </div>
  );
};

Navigation.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  selectPlatformSort: PropTypes.func.isRequired
};
export default Navigation;
