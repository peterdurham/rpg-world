import React from 'react';
import '../../../sass/main.scss';

import Review1 from '../../../img/reviews/review1.jpg';
import Review2 from '../../../img/reviews/review2.jpg';
import Review3 from '../../../img/reviews/review3.jpg';
import Review4 from '../../../img/reviews/review4.jpg';
import Review5 from '../../../img/reviews/review5.jpg';
import Review6 from '../../../img/reviews/review6.jpg';
import Review7 from '../../../img/reviews/review7.jpg';
import Review8 from '../../../img/reviews/review8.jpg';
import Review9 from '../../../img/reviews/review9.jpg';
import Review10 from '../../../img/reviews/review10.jpg';

import Kotaku from '../../../img/kotaku-logo.png';
import IGN from '../../../img/ign-logo.png';
import RPGFan from '../../../img/rpgfan-logo.png';



const Review = (props) => {
    let img;
    let id = props.id;
        console.log(id)
    if(props.id === 1) {
        img = Review1;
    } else if(props.id === 2){
        img = Review2;
    } else if(props.id === 3){
        img = Review3;
    } else if(props.id === 4){
        img = Review4;
    } else if(props.id === 5){
        img = Review5;
    } else if(props.id === 6){
        img = Review6;
    } else if(props.id === 7){
        img = Review7;
    } else if(props.id === 8){
        img = Review8;
    } else if(props.id === 9){
        img = Review9;
    } else if(props.id === 10){
        img = Review10;
    }

    let siteLogo;
    let siteLink;
    if(props.site === "Kotaku") {
        siteLogo = Kotaku;
        siteLink = "https://kotaku.com/";
    } else if(props.site === "IGN") {
        siteLogo = IGN;
        siteLink = 'https://www.ign.com/';
    } else if(props.site === "RPG Fan") {
        siteLogo = RPGFan;
        siteLink = 'http://www.rpgfan.com/';
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
        <div className="Review">
            <a href={link}><img src={img} alt="preview" className="Review__img"/></a>
            <div className="Review__content">
                <div className="Review__title"><a href={link} className="Review__link">{props.title}</a></div>
                <div className="Review__preview">{props.preview}</div>
                <div className="Review__info">
                    {props.author} {props.date}
                </div>
            </div>
            <div className="Review__site"><a href={siteLink} className="Review__logolink"><img src={siteLogo} alt="site logo" className="Review__logo"/></a></div>
        </div>
    );
}

export default Review;