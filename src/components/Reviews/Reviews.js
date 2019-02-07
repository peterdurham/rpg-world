import React from "react";
import PropTypes from "prop-types";

import "../../sass/main.scss";

import FinalFantasyIX from "../../img/fullsize/Final_Fantasy_IX.jpg";
import Review from "./Review/Review";
import TopPreview from "../TopPreview/TopPreview";

const Reviews = ({ reviews, top10 }) => {
  return (
    <div className="Reviews">
      <div className="Reviews__content">
        <div className="Reviews__header">Latest Reviews</div>
        {reviews.map(review => (
          <Review
            key={review.id}
            id={review.id}
            title={review.title}
            author={review.author}
            date={review.date}
            preview={review.preview}
            site={review.site}
            URL={review.URL}
          />
        ))}
      </div>
      <div className="Reviews__topgames">
        <img
          src={FinalFantasyIX}
          alt="FF 9"
          className="Reviews__topgames--coverimage"
        />
        <div className="Reviews__topgames--header">Top Games</div>
        {top10.map(game => (
          <TopPreview
            key={game.id}
            id={game.id}
            title={game.title}
            developer={game.developer}
            genre={game.genre}
            platforms={game.platforms}
            release={game.release}
          />
        ))}
      </div>
    </div>
  );
};
Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  top10: PropTypes.array.isRequired
};
export default Reviews;
