import React from 'react';
import '../../../sass/main.scss';

import Article1 from '../../../img/news/article1.jpg';
import Article2 from '../../../img/news/article2.jpg';
import Article3 from '../../../img/news/article3.jpg';
import Article4 from '../../../img/news/article4.jpg';
import Article5 from '../../../img/news/article5.jpg';
import Article6 from '../../../img/news/article6.jpg';
import Article7 from '../../../img/news/article7.jpg';
import Article8 from '../../../img/news/article8.jpg';
import Article9 from '../../../img/news/article9.jpg';
import Article10 from '../../../img/news/article10.jpg';

import Kotaku from '../../../img/kotaku-logo.png';
import N4G from '../../../img/N4G-logo.png';
import Gamespot from '../../../img/gamespot-logo.png';

const NewsLink = (props) => {
    let title;
    if(props.id === 1) {
        title = Article1;
    } else if(props.id === 2){
        title = Article2;
    } else if(props.id === 3){
        title = Article3;
    } else if(props.id === 4){
        title = Article4;
    } else if(props.id === 5){
        title = Article5;
    } else if(props.id === 6){
        title = Article6;
    } else if(props.id === 7){
        title = Article7;
    } else if(props.id === 8){
        title = Article8;
    } else if(props.id === 9){
        title = Article9;
    } else if(props.id === 10){
        title = Article10;
    }

    let siteLogo;
    let siteLink;
    if(props.site === "Kotaku") {
        siteLogo = Kotaku;
        siteLink = "https://kotaku.com/";
    } else if(props.site === "N4G") {
        siteLogo = N4G;
        siteLink = 'https://n4g.com/';
    } else if(props.site === "Gamespot") {
        siteLogo = Gamespot;
        siteLink = 'https://www.gamespot.com/';
    }
    
    let link;
    if(props.id === 1) {
        link = props.URL
    } else if(props.id === 2){
        link = props.URL;
    } else if(props.id === 3){
        link = props.URL;
    } else if(props.id === 4){
        link = props.URL;
    } else if(props.id === 5){
        link = props.URL;
    } else if(props.id === 6){
        link = props.URL;
    } else if(props.id === 7){
        link = props.URL;
    } else if(props.id === 8){
        link = props.URL;
    } else if(props.id === 9){
        link = props.URL;
    } else if(props.id === 10){
        link = props.URL;
    }
    return(
        <div className="NewsLink">
            <a href={link} className="NewsLink__link"><img src={title} alt="preview" className="NewsLink__image"/></a>
            <div className="NewsLink__text">
                <div className="NewsLink__title"><a href={link} className="NewsLink__link">{props.title}</a></div>
                <div className="NewsLink__preview">{props.preview}</div>
                <div className="NewsLink__info">by: {props.author} {props.date}</div>

            </div>
            <div><a href={siteLink} className="NewsLink__logolink"><img src={siteLogo} alt="site logo" className="NewsLink__logo"/></a></div>
        </div>
    );
}

export default NewsLink;