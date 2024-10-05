import { useEffect, useState } from "react";
import Country from "../country/country";
import './countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);


    const updateVisitedCountry = country => {
        console.log('add this to visited country');
        const newVisit = [...visitedCountries, country];
        setVisitedCountries(newVisit)
    }
    return (
        <div>
            <h3>Total Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="container">
                {countries.map(country => <Country key={country.cca3} country={country} updateVisitedCountry={updateVisitedCountry}></Country>)}
            </div>
        </div >
    );
};

export default Countries;
