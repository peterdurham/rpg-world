import React from 'react';

import '../../sass/main.scss';

const Navigation = (props) => {

    
    
    
    return (
        <div className="Navigation">
            <div className="Navigation__item" onClick={()=>props.loadPage(0)}>RPG World</div>
            <div className="Navigation__item" onClick={()=>props.loadPage(1)}>Reviews</div>
            {/* <div className="Navigation__item" onClick={()=>props.loadPage(2)}>Platforms</div> */}
            
            
            <div className="dropdown">
                <button className="Navigation__item dropbtn" onClick={()=>props.selectPlatformSort([true, false, false, false, false, false, false, false, false])}>Top Games<span className="Navigation__icon">&#9660;</span></button>
                <div className="dropdown-content">
                    <div className="dropdown-selection" onClick={()=>props.selectPlatformSort([true, false, false, false, false, false, false, false, false])} >All Platforms</div>
                    <div className="dropdown-selection" onClick={()=>props.selectPlatformSort([false, true, false, false, false, false, false, false, false])} >PC</div>
                    <div className="dropdown-selection" onClick={()=>props.selectPlatformSort([false, false, true, false, false, false, false, false, false])}>PlayStation</div>
                    <div className="dropdown-selection" onClick={()=>props.selectPlatformSort([false, false, false, true, false, false, false, false, false])}>PlayStation 2</div>
                    <div className="dropdown-selection" onClick={()=>props.selectPlatformSort([false, false, false, false, true, false, false, false, false])}>PlayStation 3</div>
                    <div className="dropdown-selection" onClick={()=>props.selectPlatformSort([false, false, false, false, false, true, false, false, false])} >PlayStation 4</div>
                    <div className="dropdown-selection" onClick={()=>props.selectPlatformSort([false, false, false, false, false, false, true, false, false])}>Xbox 360</div>
                    <div className="dropdown-selection" onClick={()=>props.selectPlatformSort([false, false, false, false, false, false, false, true, false])}>Xbox One</div>
                    <div className="dropdown-selection" onClick={()=>props.selectPlatformSort([false, false, false, false, false, false, false, false, true])}>Nintendo Switch</div>
                </div>
            </div>
            
            <div className="Navigation__item" onClick={()=>props.loadPage(3)}>Store</div>
         
        </div>
    );
}
export default Navigation