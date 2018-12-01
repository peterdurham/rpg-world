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
            
            {props.shoppingCart.map((item)=><CartItem 
                key={item}
                title={item}
                game={props.games.filter((game)=>game.title === item)}
                removeFromCart = {props.removeFromCart}
            />)}
            <div className="Cart__totalprice">Total Price: ${totalPrice.toFixed(2)}</div>
    </div> : <div>
            <div className="Cart__message">Your Cart is empty</div>
            <div className="Cart__message">Visit the store to add games</div>
                <button className="Cart__button" onClick={()=>props.loadPage(3)}>Store</button>
            </div>


    return(
        <div className="Cart">
            <div className="Cart__title">Shopping Cart</div>
            {cart}
        </div>
    );
}

export default Cart;