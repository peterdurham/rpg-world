import React from 'react';

import '../../sass/main.scss';
import NewsLink from '../News/NewsLink/NewsLink';

import Castlevania from '../../img/fullsize/Castlevania-_Symphony_of_the_Night.jpg';
import DarkSoulsIII from '../../img/fullsize/Dark_Souls_III.jpg';
import FableII from '../../img/fullsize/Fable_2.jpg';
import MonsterHunter from '../../img/fullsize/Monster_Hunter-_World.jpg';
import DivinityII from '../../img/fullsize/Divinity-_Original_Sin_II.jpg';

import FinalFantasyIX from '../../img/fullsize/Final_Fantasy_IX.jpg';

const Home = (props) => {
    return(
        <div>
            <div className="Gallery">
                <div className="Gallery__toprow">
                    <img src={Castlevania} alt="Castlevania" className="Gallery__top"/>
                    <img src={DarkSoulsIII} alt="Dark Souls III" className="Gallery__top"/>
                </div>
                <div className="Gallery__bottomrow">
                    <img src={FableII} alt="Fable II" className="Gallery__bottom"/>
                    <img src={MonsterHunter} alt="Monster Hunter"  className="Gallery__bottom"/>
                    <img src={DivinityII} alt="Divinity II" className="Gallery__bottom"/>
                </div>
            </div>

            <div className="Home__content Home">
                <div className="Home__news">
                    <div className="Home__news--header">Latest News</div>
                    {props.news.map((article)=><NewsLink 
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        author={article.author}
                        date={article.date}
                        preview={article.preview}
                        site={article.site}
                        URL={article.URL}
                    />)}


                </div>
                <div className="Home__topgames">
                    <img src={FinalFantasyIX} alt="FF 9" className="Home__topgames--coverimage"/>
                    <div className="Home__topgames--header">Top Games</div>
                </div>
            </div>
        </div>
    );
}

export default Home;