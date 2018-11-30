import React from 'react';
import '../../sass/main.scss';

import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    let prices = props.games.filter((game)=>props.shoppingCart.indexOf(game.title)> -1).map((item)=>item.price);
    let totalPrice;
    if(props.shoppingCart.length >0 ){
        totalPrice = prices.reduce((x,y)=>x+y);
    }
 
    
    let cart = (props.shoppingCart.length > 0) ?
    <div>
            Cart
            {props.shoppingCart.map((item)=><CartItem 
                key={item}
                title={item}
                game={props.games.filter((game)=>game.title === item)}
                removeFromCart = {props.removeFromCart}
            />)}
            <div>Total Price: {totalPrice}</div>
    </div> : <div>Your Cart is empty</div>


    return(
        <div>
            {cart}
        </div>
    );
}

export default Cart;