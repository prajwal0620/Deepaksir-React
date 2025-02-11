import React from "react";

function Main(){

    var name = 'Prajwal Hasabe';

    let ott = {
        webseries: 'Squid Game',
        platform: 'Netflix'
    }
    return(
        <div> 
            <h2>
                Hello from {name}
            </h2>

            <h3>
                We are watching {ott.webseries} in {ott.platform}
            </h3>
        </div>
    )
}

export default Main;