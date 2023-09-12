import { useState } from "react";

const Country = ({country, handlerWantVisist}) => {
    const {name, flags, area, capital} = country;
    const [visit, setVisit] = useState(false);
    const handleVisit = () => {
        setVisit(!visit);
    }

    return (
        <div className="country">
            <img src={flags?.png} alt={flags?.alt} />
            <div>
                <h3>Name: {name?.common}</h3>
                <ul>
                    <li>Area: ({area})<sup>2</sup>km</li>
                    <li>Capital: {capital}</li>
                </ul>
                <button onClick={() => handlerWantVisist(country)}>Want to Visit</button>
                <button onClick={handleVisit}>{visit ? 'Visited' : 'Going'}</button>
            </div>
        </div>
    );
}

export default Country;