import React from "react";

const FavCountries = ({countriesList}) => {

  const favList = countriesList.map ((country, index) => {
    return (
      <li>{country.name.common}</li>
    )
  })
  return (
    <>
    <hr></hr>
    This is the FavCountries List.
    <ul>
      {favList}
    </ul>
    
    </>
  )
};

export default FavCountries;