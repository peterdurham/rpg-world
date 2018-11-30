import React from 'react';

import '../../sass/main.scss';

const Header = (props) => {
    let cart = (props.shoppingCart.length === 0) ?
    <div className="header__cart"  onClick={()=>props.loadPage(5)}>Cart</div> :
    <div className="header__cart"  onClick={()=>props.loadPage(5)}>Cart {props.shoppingCart.length}</div>
    
    return (
        <div className="header">
            <div className="header__banner">RPG World</div>
            {cart}
        </div>
    );
}

export default Header;