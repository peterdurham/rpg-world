import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../sass/main.scss";

import CartItem from "./CartItem/CartItem";

const Cart = ({ games, shoppingCart, removeFromCart }) => {
  let prices = games
    .filter(game => shoppingCart.indexOf(game.title) > -1)
    .map(item => item.price);
  let totalPrice;
  if (shoppingCart.length > 0) {
    totalPrice = prices.reduce((x, y) => x + y);
  }

  let cart =
    shoppingCart.length > 0 ? (
      <div>
        {shoppingCart.map(item => (
          <CartItem
            key={item}
            title={item}
            game={games.filter(game => game.title === item)}
            removeFromCart={removeFromCart}
          />
        ))}
        <div className="Cart__totalprice">
          Total Price: ${totalPrice.toFixed(2)}
        </div>
      </div>
    ) : (
      <div className="Cart__empty">
        <div className="Cart__message">Your Cart is empty</div>
        <div className="Cart__message">Visit the store to add games</div>
        <br />
        <Link className="Cart__button" to="/store">
          Store
        </Link>
      </div>
    );

  return (
    <div className="Cart">
      <div className="Cart__title">Shopping Cart</div>
      {cart}
    </div>
  );
};
Cart.propTypes = {
  games: PropTypes.array.isRequired,
  shoppingCart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired
};
export default Cart;
