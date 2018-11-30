import React from 'react';

import '../../sass/main.scss';
// import Review from './Review/Review';

import FinalFantasyIX from '../../img/fullsize/Final_Fantasy_IX.jpg';
import Review from './Review/Review';
import TopPreview from '../TopPreview/TopPreview';

const Reviews = (props) => {
    return(
        <div className="Reviews">
            <div className="Reviews__content">
                <div className="Reviews__header">Latest Reviews</div>
                {props.reviews.map((review)=><Review 
                    key = {review.id}
                    id = {review.id}
                    title = {review.title}
                    author = {review.author}
                    date = {review.date}
                    preview = {review.preview}
                    site = {review.site}
                    URL = {review.URL}
                />)}    

            </div>
            <div className="Reviews__topgames">
                    <img src={FinalFantasyIX} alt="FF 9" className="Reviews__topgames--coverimage"/>
                    <div className="Reviews__topgames--header">Top Games</div>
                    {props.top10.map((game)=><TopPreview 
                        key = {game.id}
                        id = {game.id}
                        title = {game.title}
                        developer = {game.developer}
                        genre = {game.genre}
                        platforms = {game.platforms}
                        release ={game.release}
                        viewDetails = {props.viewDetails}
                    />)}
            </div>
        </div>
        
    );
}

export default Reviews;