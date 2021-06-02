import React from 'react';
import "./Fn.css";

function Fn({infoC,infoO,infoD,dTime}){
    return(
        <div className="Fore">
            <span className="dtime">{dTime}</span>
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