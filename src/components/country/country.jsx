import { useState } from 'react';
import './country.css';

const Country = ({ country, updateVisitedCountry }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);

    const handleVisted = () => {
        setVisited(!visited);
    };

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'Purple' : 'black' }}>Name: {name?.common}</h3>
            <img src={flags.png} alt={name?.common} />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => updateVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisted}>{visited ? 'Visited' : 'Going'}</button>
            <span>{visited ? 'I have visited this country' : 'I want to visit'}</span>
        </div>
    );
};

export default Country;
