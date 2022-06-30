import React from "react";

const WorldPop = ({ countries }) => {


   
        const total = countries.reduce((runningTotal, country) => {
            return runningTotal + country.population;
        },0 );

   return(
    <>
        <h2>World population</h2>
        {total}
    
    </>
   )    
}

export default WorldPop;