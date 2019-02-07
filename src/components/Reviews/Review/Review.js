import React from "react";
import PropTypes from "prop-types";
import "../../../sass/main.scss";

import Review1 from "../../../img/reviews/review1.jpg";
import Review2 from "../../../img/reviews/review2.jpg";
import Review3 from "../../../img/reviews/review3.jpg";
import Review4 from "../../../img/reviews/review4.jpg";
import Review5 from "../../../img/reviews/review5.jpg";
import Review6 from "../../../img/reviews/review6.jpg";
import Review7 from "../../../img/reviews/review7.jpg";
import Review8 from "../../../img/reviews/review8.jpg";
import Review9 from "../../../img/reviews/review9.jpg";
import Review10 from "../../../img/reviews/review10.jpg";

import Kotaku from "../../../img/kotaku-logo.png";
import IGN from "../../../img/ign-logo.png";
import RPGFan from "../../../img/rpgfan-logo.png";

const Review = ({ id, site, URL, title, preview, author, date }) => {
  let img;

  switch (id) {
    case 1:
      img = Review1;
      break;
    case 2:
      img = Review2;
      break;
    case 3:
      img = Review3;
      break;
    case 4:
      img = Review4;
      break;
    case 5:
      img = Review5;
      break;
    case 6:
      img = Review6;
      break;
    case 7:
      img = Review7;
      break;
    case 8:
      img = Review8;
      break;
    case 9:
      img = Review9;
      break;
    case 10:
      img = Review10;
      break;
    default:
      break;
  }

  let siteLogo;
  let siteLink;
  if (site === "Kotaku") {
    siteLogo = Kotaku;
    siteLink = "https://kotaku.com/";
  } else if (site === "IGN") {
    siteLogo = IGN;
    siteLink = "https://www.ign.com/";
  } else if (site === "RPG Fan") {
    siteLogo = RPGFan;
    siteLink = "http://www.rpgfan.com/";
  }
  let link = URL;
  return (
    <div className="Review">
      <a href={link}>
        <img src={img} alt="preview" className="Review__img" />
      </a>
      <div className="Review__content">
        <div className="Review__title">
          <a href={link} className="Review__link">
            {title}
          </a>
        </div>
        <div className="Review__preview">{preview}</div>
        <div className="Review__info">
          {author} {date}
        </div>
      </div>
      <div className="Review__site">
        <a href={siteLink} className="Review__logolink">
          <img src={siteLogo} alt="site logo" className="Review__logo" />
        </a>
      </div>
    </div>
  );
};
Review.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  site: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Review;
