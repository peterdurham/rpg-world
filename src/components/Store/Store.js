import React from 'react';
import '../../sass/main.scss';

import Carousel from '../../containers/Carousel/Carousel';
import Offers from '../../components/Store/Offers/Offers';
import Listing from '../../components/Store/Listing/Listing';
const Store = (props) => {
    
    return(
        <div className="Store">
            
            <div className="Store__label">Featured</div>
            <Carousel 
                games={props.games}
                viewDetails = {props.viewDetails}
            />

            <div className="Store__label">Special Offers</div>
            <Offers 
                games={props.games}
                viewDetails = {props.viewDetails}
                />
            <div className="Store__label Store__label--rpg">All RPGs</div>
            {props.games.map((game)=><Listing
                key = {game.title}
                title = {game.title}
                platforms = {game.platforms}
                genre = {game.genre}
                price = {game.price}
                viewDetails = {props.viewDetails}
            />)}
        </div>
    );
  
    
}

export default Store;