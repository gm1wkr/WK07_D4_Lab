import React from "react";

const CountriesDetail = ({country, onAddToFavorites})=> {

    const handleClick = (event)=> {
        onAddToFavorites(country)
    }


    if(country === undefined){
        return
    }

    return(
        <>
        <h2>{country.name.common}</h2>
        {country.capital}

        <button onClick={handleClick}>Add to Favorites</button>
        </>
    )
}

export default CountriesDetail;