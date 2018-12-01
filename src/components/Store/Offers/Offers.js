import React from 'react';
import '../../../sass/main.scss';

import ChronoCrossCover from '../../../img/covers/Chrono_Cross.png';

import MonsterHunterWorldCover from '../../../img/covers/Monster_Hunter_World.png';

import DemonSouls from '../../../img/fullsize/Demon_Souls.jpg';
import FinalFantasyX from '../../../img/fullsize/Final_Fantasy_X.jpg';


const Offers = (props) => {
    return (
        <div className="Offers">
            <div className="Offers__left" onClick={()=>props.viewDetails("Chrono Cross")}>
                <img src={ChronoCrossCover} alt="chrono cross" className="Offers__tallimg"/>
                
                <div className="Offers__content">
                    <div className="Offers__sale--title">Chrono Cross</div>
                    <div className="Offers__sale">
                        <div className="Offers__sale--label">-50%</div>
                        <div className="Offers__sale--price">$4.99</div>
                    </div>
                    
                </div>
            </div>
            <div className="Offers__middle" onClick={()=>props.viewDetails("Monster Hunter: World")}>
                <img src={MonsterHunterWorldCover} alt="bastion" className="Offers__tallimg"/>
                <div className="Offers__content">
                    <div className="Offers__sale--title">Monster Hunter World</div>
                    <div className="Offers__sale">
                        <div className="Offers__sale--label">-50%</div>
                        <div className="Offers__sale--price">$4.99</div>
                    </div>
                </div>    
            </div>
            <div className="Offers__right">
                <div className="Offers__right--top" onClick={()=>props.viewDetails("Demon Souls")}>
                    <img src={DemonSouls} alt="demon souls" className="Offers__wideimg"/>
                    
                    <div className="Offers__content--small">
                        <div className="Offers__sale--title">Demon Souls</div>
                        <div className="Offers__sale">
                            <div className="Offers__sale--label">-50%</div>
                            <div className="Offers__sale--price">$4.99</div>
                        </div>
                    </div>
                </div>
                <div className="Offers__right--bottom" onClick={()=>props.viewDetails("Final Fantasy X")}>
                    <img src={FinalFantasyX} alt="ffx" className="Offers__wideimg"/> 
                    
                    <div className="Offers__content--small">
                        <div className="Offers__sale--title">Final Fantasy X</div>
                        <div className="Offers__sale">
                            <div className="Offers__sale--label">-50%</div>
                            <div className="Offers__sale--price">$4.99</div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Offers;