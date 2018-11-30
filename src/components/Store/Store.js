import React from 'react';
import '../../sass/main.scss';

import Carousel from '../../containers/Carousel/Carousel';
import Offers from '../../components/Store/Offers/Offers';
import Listing from '../../components/Store/Listing/Listing';
const Store = (props) => {
    
    return(
        <div>
            Store
            Featured
            <Carousel 
                games={props.games}
                viewDetails = {props.viewDetails}
            />

            Special Offers
            <Offers 
                games={props.games}
                viewDetails = {props.viewDetails}
                />
            All RPGs
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