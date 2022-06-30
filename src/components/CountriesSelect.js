import React from "react";

const CountriesSelect = ({ countries, onCountrySelected }) => {

    // handleSelect


    const handleSelectChange =(event) => {
        const selectedCountry = event.target.value;
        onCountrySelected(selectedCountry);
    }

    const countriesOptions = countries.map( (country, index) => {
        return(
            <option key={country.ccn3} value={index}>{country.name.common}</option>
            // console.log(index)
        )
    });




  return (
    <select onChange="handleSelectChange">
        {countriesOptions}
    </select>
  )
}

export default CountriesSelect;