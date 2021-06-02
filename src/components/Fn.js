import React from 'react';

function Fn({infoC,infoO,infoD,dTime}){
    return(
        <div className="Fore">
            {infoC}
            {infoO}
            {infoD}
            {dTime}
        </div>
    );
}

export default Fn;