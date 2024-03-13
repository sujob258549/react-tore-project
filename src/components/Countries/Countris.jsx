import { useState } from "react";
import Contry from "./Contry";

const Countris = () => {
    const [countrys, setCountry] = useState([]);
    const [visitedCountry, setVisitesCountry] = useState([]);
    useState(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data));

    }, []);
    const addvisitedCountryName = flags => {
        const newAddVisitedCountryName = {...visitedCountry, flags};
        setVisitesCountry(newAddVisitedCountryName);
    }
    return (
        <div>
            <h2>country: {countrys.length}</h2>
            <h4>Visited Country: {visitedCountry.length} <br />
                <ol>
                   {
                    visitedCountry.map(visit => <li>vi</li>)
                   }
                </ol>
            </h4>
            <div className='country-container'>
                {
                    countrys.map(country => <Contry
                         key={country.cca3}
                         addvisitedCountryName={addvisitedCountryName}
                         country={country}
                    
                         ></Contry>)
                }
            </div>
        </div>
    );
};

export default Countris;