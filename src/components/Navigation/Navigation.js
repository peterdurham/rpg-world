import React from "react";
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
      <div
        className={
          display[5] === true
            ? "Navigation__item Navigation__item--active"
            : "Navigation__item"
        }
        onClick={() => loadPage(5)}
      >
        Cart
      </div>
    ) : (
      <div
        className={
          display[5] === true
            ? "Navigation__item Navigation__item--active"
            : "Navigation__item"
        }
        onClick={() => loadPage(5)}
      >
        Cart {shoppingCart.length}
      </div>
    );

  return (
    <div className="Navigation">
      <div
        className={
          display[0] === true
            ? "Navigation__item Navigation__item--active"
            : "Navigation__item"
        }
        onClick={() => loadPage(0)}
      >
        RPG World
      </div>
      <div
        className={
          display[1] === true
            ? "Navigation__item Navigation__item--active"
            : "Navigation__item"
        }
        onClick={() => loadPage(1)}
      >
        Reviews
      </div>

      <div className="dropdown">
        <button
          className={
            display[2] === true
              ? "Navigation__item dropbtn Navigation__item--active"
              : "Navigation__item dropbtn"
          }
          onClick={() =>
            selectPlatformSort([
              true,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false
            ])
          }
        >
          Top Games<span className="Navigation__icon">&#9660;</span>
        </button>
        <div className="dropdown-content">
          <div
            className="dropdown-selection"
            onClick={() =>
              selectPlatformSort([
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
              ])
            }
          >
            All Platforms
          </div>
          <div
            className="dropdown-selection"
            onClick={() =>
              selectPlatformSort([
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false
              ])
            }
          >
            PC
          </div>
          <div
            className="dropdown-selection"
            onClick={() =>
              selectPlatformSort([
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false
              ])
            }
          >
            PlayStation
          </div>
          <div
            className="dropdown-selection"
            onClick={() =>
              selectPlatformSort([
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false
              ])
            }
          >
            PlayStation 2
          </div>
          <div
            className="dropdown-selection"
            onClick={() =>
              selectPlatformSort([
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false
              ])
            }
          >
            PlayStation 3
          </div>
          <div
            className="dropdown-selection"
            onClick={() =>
              selectPlatformSort([
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false
              ])
            }
          >
            PlayStation 4
          </div>
          <div
            className="dropdown-selection"
            onClick={() =>
              selectPlatformSort([
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false
              ])
            }
          >
            Xbox 360
          </div>
          <div
            className="dropdown-selection"
            onClick={() =>
              selectPlatformSort([
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false
              ])
            }
          >
            Xbox One
          </div>
          <div
            className="dropdown-selection"
            onClick={() =>
              selectPlatformSort([
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true
              ])
            }
          >
            Nintendo Switch
          </div>
        </div>
      </div>

      <div
        className={
          display[3] === true
            ? "Navigation__item Navigation__item--active"
            : "Navigation__item"
        }
        onClick={() => loadPage(3)}
      >
        Store
      </div>
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
