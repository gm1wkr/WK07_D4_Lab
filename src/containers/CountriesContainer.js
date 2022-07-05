import React, {useState, useEffect} from "react";
import WorldPop from "../components/WorldPop";
import CountriesSelect from "../components/CountriesSelect";
import CountriesDetail from "../components/CountriesDetail";
import FavCountries from "../components/FavCountries";



const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    
    const [selectedCountry, setSelectedCountry] = useState(1);
    const [favoriteCountries, setFavoriteCountires] = useState([]);

    

    const addCountryToFavorite = (countryToAdd) => {
       const favoriteCountriesCopy =  [...favoriteCountries];
       favoriteCountriesCopy.push(countryToAdd)
       setFavoriteCountires(favoriteCountriesCopy);
    }




    useEffect( () => {
        getCountries();
    }, []);

    const getCountries = async function(){
        const res = await fetch('https://restcountries.com/v3.1/all');
        const countries = await res.json();
        setCountries(countries);
        console.log(countries[0].population);
    }

    return(
        <>
            <h2>Countries Container</h2>
            <WorldPop countries={countries} />
            <CountriesSelect countries={countries} onCountrySelected={setSelectedCountry} />
            <CountriesDetail country={countries[selectedCountry]} onAddToFavorites={addCountryToFavorite}/>
            <FavCountries countriesList={favoriteCountries} />
            
        </>
)}

export default CountriesContainer;

