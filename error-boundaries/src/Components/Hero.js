import React from 'react';
import { useState } from 'react';

function Hero(props) {

    if(props.heroName.toLowerCase() === "joker"){
        throw new Error("Hero Component prop error");
    }

    return (
        <div>
            <h2>{props.heroName}</h2>
        </div>
    );
}

export default Hero;