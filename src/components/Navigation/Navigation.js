import React from "react";
import { Link, Route } from "react-router-dom";
import PropTypes from "prop-types";
import "../../sass/main.scss";

const Navigation = ({
  shoppingCart,
  loadPage,
  display,
  selectPlatformSort
}) => {
  let cart =
    shoppingCart.length === 0 ? (
      <Link
        to="/cart"
        className={
          display[5] === true
            ? "Navigation__item Navigation__item--active"
            : "Navigation__item"
        }
      >
        Cart
      </Link>
    ) : (
      <Link
        to="/cart"
        className={
          display[5] === true
            ? "Navigation__item Navigation__item--active"
            : "Navigation__item"
        }
      >
        Cart {shoppingCart.length}
      </Link>
    );

  return (
    <div className="Navigation">
      <Link
        to="/"
        className={
          display[0] === true
            ? "Navigation__item Navigation__item--active"
            : "Navigation__item"
        }
      >
        RPG World
      </Link>
      <Link
        to="/reviews"
        className={
          display[1] === true
            ? "Navigation__item Navigation__item--active"
            : "Navigation__item"
        }
      >
        Reviews
      </Link>

      <div className="dropdown">
        <Link
          to="/topgames/all"
          className={
            display[2] === true
              ? "Navigation__item dropbtn Navigation__item--active"
              : "Navigation__item dropbtn"
          }
        >
          Top Games<span className="Navigation__icon">&#9660;</span>
        </Link>
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

      <Link
        to="/store"
        className={
          display[3] === true
            ? "Navigation__item Navigation__item--active"
            : "Navigation__item"
        }
      >
        Store
      </Link>
      {cart}
    </div>
  );
};

Navigation.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  display: PropTypes.array.isRequired,
  selectPlatformSort: PropTypes.func.isRequired
};
export default Navigation;
