import React, {useState, useEffect} from "react";
import WorldPop from "../components/WorldPop";
import CountriesSelect from "../components/CountriesSelect";



const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

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
        <CountriesSelect countries={countries}/>
        </>
)}

export default CountriesContainer;