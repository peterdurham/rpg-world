import React from 'react';

import '../../sass/main.scss';
import Review from './Review/Review';

import FinalFantasyIX from '../../img/fullsize/Final_Fantasy_IX.jpg';

const Reviews = (props) => {
    return(
        <div className="Reviews">
            <div className="Reviews__content">
                <div className="Reviews__header">Latest Reviews</div>
                    {/* {props.news.map((article)=><Review 
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        author={article.author}
                        date={article.date}
                        preview={article.preview}
                        site={article.site}
                        URL={article.URL}
                    />)} */}


            </div>
            <div className="Reviews__topgames">
                    <img src={FinalFantasyIX} alt="FF 9" className="Reviews__topgames--coverimage"/>
                    <div className="Reviews__topgames--header">Top Games</div>
            </div>
        </div>
        
    );
}

export default Reviews;