import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../sass/main.scss";
import NewsLink from "../News/NewsLink/NewsLink";
import TopPreview from "../TopPreview/TopPreview";

import Castlevania from "../../img/fullsize/Castlevania-_Symphony_of_the_Night.jpg";
import DarkSoulsIII from "../../img/fullsize/Dark_Souls_III.jpg";
import FableII from "../../img/fullsize/Fable_2.jpg";
import MonsterHunter from "../../img/fullsize/Monster_Hunter-_World.jpg";
import DivinityII from "../../img/fullsize/Divinity-_Original_Sin_II.jpg";

import FinalFantasyIX from "../../img/fullsize/Final_Fantasy_IX.jpg";

const Home = ({ top10, news }) => {
  return (
    <div>
      <div className="Gallery">
        <div className="Gallery__toprow">
          <Link className="Gallery__topleft" to="/details/:31">
            <img src={Castlevania} alt="Castlevania" className="Gallery__top" />
            <div className="Gallery__label">
              Castlevania: Symphony of the Night
            </div>
          </Link>

          <Link className="Gallery__topright" to="/details/:28">
            <img
              src={DarkSoulsIII}
              alt="Dark Souls III"
              className="Gallery__top"
            />
            <div className="Gallery__label">Dark Souls III</div>
          </Link>
        </div>
        <div className="Gallery__bottomrow">
          <Link className="Gallery__bottomleft" to="/details/:33">
            <img src={FableII} alt="Fable II" className="Gallery__bottom" />
            <div className="Gallery__label--small">Fable II</div>
          </Link>
          <Link className="Gallery__bottommiddle" to="/details/:25">
            <img
              src={MonsterHunter}
              alt="Monster Hunter"
              className="Gallery__bottom"
            />
            <div className="Gallery__label--small">Monster Hunter: World</div>
          </Link>
          <Link className="Gallery__bottomright" to="/details/:4">
            <img
              src={DivinityII}
              alt="Divinity II"
              className="Gallery__bottom"
            />
            <div className="Gallery__label--small">
              Divinity: Original Sin II
            </div>
          </Link>
        </div>
      </div>

      <div className="Home__content Home">
        <div className="Home__news">
          <div className="Home__news--header">Latest News</div>
          {news.map((article, index) => (
            <NewsLink
              key={index}
              id={article.id}
              title={article.title}
              author={article.author}
              date={article.date}
              preview={article.preview}
              site={article.site}
              URL={article.URL}
            />
          ))}
        </div>
        <div className="Home__topgames">
          <img
            src={FinalFantasyIX}
            alt="FF 9"
            className="Home__topgames--coverimage"
          />
          <div className="Home__topgames--header">Top Games</div>
          {top10.map((game, index) => {
            return (
              <div className="Home__topgames--preview" key={index}>
                <TopPreview
                  id={game.id}
                  title={game.title}
                  developer={game.developer}
                  genre={game.genre}
                  platforms={game.platforms}
                  release={game.release}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
Home.propTypes = {
  top10: PropTypes.array.isRequired,
  news: PropTypes.array.isRequired
};
export default Home;
