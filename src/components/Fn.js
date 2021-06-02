/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./Fn.css";

function Fn({infoC,infoO,infoD,dTime,img2,img5}){
    return(
        <div className="Fore">
            <span className="dtime">{dTime}</span>
            <div className="img">
                <img src={img2}/>
                <img src={img5}/>
            </div>
            <div className="notice">
            <p>
                {infoC}
            </p>    
            <p>
                {infoO}
            </p>
            <p>
                {infoD}
            </p>
            </div>
            
        </div>
    );
}

export default Fn;