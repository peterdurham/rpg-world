import React from 'react';
import '../../../sass/main.scss';

const CartItem = (props) => {
    
    
    
    return(
        <div>
            {props.title}
            {props.game[0].price}
            <button onClick={()=>props.removeFromCart(props.title)}>Remove</button>
        </div>
    );
}

export default CartItem;