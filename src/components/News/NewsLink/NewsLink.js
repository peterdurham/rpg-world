import React from "react";
import PropTypes from "prop-types";
import "../../../sass/main.scss";

import Article1 from "../../../img/news/article1.jpg";
import Article2 from "../../../img/news/article2.jpg";
import Article3 from "../../../img/news/article3.jpg";
import Article4 from "../../../img/news/article4.jpg";
import Article5 from "../../../img/news/article5.jpg";
import Article6 from "../../../img/news/article6.jpg";
import Article7 from "../../../img/news/article7.jpg";
import Article8 from "../../../img/news/article8.jpg";
import Article9 from "../../../img/news/article9.jpg";
import Article10 from "../../../img/news/article10.jpg";

import Kotaku from "../../../img/kotaku-logo.png";
import N4G from "../../../img/N4G-logo.png";
import Gamespot from "../../../img/gamespot-logo.png";

const NewsLink = ({ id, site, title, preview, author, date, URL }) => {
  let titleDisplay;

  switch (id) {
    case 1:
      titleDisplay = Article1;
      break;
    case 2:
      titleDisplay = Article2;
      break;
    case 3:
      titleDisplay = Article3;
      break;
    case 4:
      titleDisplay = Article4;
      break;
    case 5:
      titleDisplay = Article5;
      break;
    case 6:
      titleDisplay = Article6;
      break;
    case 7:
      titleDisplay = Article7;
      break;
    case 8:
      titleDisplay = Article8;
      break;
    case 9:
      titleDisplay = Article9;
      break;
    case 10:
      titleDisplay = Article10;
      break;
    default:
      break;
  }

  let siteLogo;
  let siteLink;
  if (site === "Kotaku") {
    siteLogo = Kotaku;
    siteLink = "https://kotaku.com/";
  } else if (site === "N4G") {
    siteLogo = N4G;
    siteLink = "https://n4g.com/";
  } else if (site === "Gamespot") {
    siteLogo = Gamespot;
    siteLink = "https://www.gamespot.com/";
  }

  return (
    <div className="NewsLink">
      <a href={URL} className="NewsLink__link">
        <img src={titleDisplay} alt="preview" className="NewsLink__image" />
      </a>
      <div className="NewsLink__text">
        <div className="NewsLink__title">
          <a href={URL} className="NewsLink__link">
            {title}
          </a>
        </div>
        <div className="NewsLink__preview">{preview}</div>
        <div className="NewsLink__info">
          by: {author} {date}
        </div>
      </div>
      <div>
        <a href={siteLink} className="NewsLink__logolink">
          <img src={siteLogo} alt="site logo" className="NewsLink__logo" />
        </a>
      </div>
    </div>
  );
};
NewsLink.propTypes = {
  id: PropTypes.number.isRequired,
  site: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired
};

export default NewsLink;
