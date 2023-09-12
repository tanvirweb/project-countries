import { useEffect, useState } from "react";
import Country from "./Country";
import './countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    const [visit, setVisit] = useState([]);
    const wantVisit = (country) => {
        const newVisit = [...visit, country];
        setVisit(newVisit);
    }

    return (
        <section>
            <h2>All Countries: {countries.length}</h2>
            <h3>Want to Visit: {visit.length}</h3>
            <ol>
                {
                    visit.map(country => <li key={country.name.common}>{country.name.common}</li>)
                }
            </ol>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.name.common} country={country} handlerWantVisist={wantVisit} ></Country>)
                }
            </div>
        </section>
    );
};

export default Countries;