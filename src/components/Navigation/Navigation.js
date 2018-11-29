import React from 'react';

import '../../sass/main.scss';

const Navigation = (props) => {
    return (
        <div className="Navigation">
            <div className="Navigation__item" onClick={()=>props.loadPage(0)}>RPG World</div>
            <div className="Navigation__item" onClick={()=>props.loadPage(1)}>Reviews</div>
            <div className="Navigation__item" onClick={()=>props.loadPage(2)}>Platforms</div>
            <div className="Navigation__item" onClick={()=>props.loadPage(3)}>Top Games</div>
            <div className="Navigation__item" onClick={()=>props.loadPage(4)}>Store</div>
            <input type="text" className="Navigation__search"/>
        </div>
    );
}
export default Navigation