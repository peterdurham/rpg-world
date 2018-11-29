import React from 'react';

import '../../sass/main.scss';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header__nav">
                <div className="header__about">
                    <div className="header__about--link">About</div>
                    <div className="header__about--link">Contact</div>
                </div>
                <div className="header__social">
                    <div className="header__social--link">twitter</div>
                    <div className="header__social--link">instagram</div>
                    <div className="header__social--link">tumblr</div>
                    <div className="header__social--link">imgur</div>
                </div>
            </div>
            <div className="header__banner">RPG World</div>
        </div>
    );
}

export default Header;