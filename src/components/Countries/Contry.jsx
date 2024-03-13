import { useState } from 'react';
import './style.css'
const Contry = ({ country, addvisitedCountryName}) => {
    // console.log(country)
    const { name, flags, continents, population, area, subregion, translations, cca3


    } = country;
    const [Visited, setVisited] = useState(false)
    const clickBtn = () => {
        setVisited(!Visited);
    }
    // add country name...
    return (
        <div>
            <div className={`country ${Visited && 'visited'}`}>
                <h4>Name : <span style={{ marginLeft: '15px', color: "orange" }}> {name.common}</span></h4>
                <img src={flags.png} style={{ borderRadius: '10px' }} className='image' alt="" />
                <p>{continents}</p>
                <p>Population : {population}</p>
                <p>Area : {area}</p>
                <p>cca3 : {cca3}</p>
                <p>subregion : {subregion}</p>
                <p>subregion : {translations.ara.common} {translations.ara.official}</p>
                <button onClick={clickBtn} style={{ padding: "10px 20px", marginRight: '20px' }}>Visited</button>
                {
                    Visited ? 'I have visited' : "You will be visited"
                }
                <br />
                <button onClick={() => addvisitedCountryName(country)} style={{ padding: "10px 20px", marginTop: '20px', backgroundColor: 'rgba(222, 184, 135, 0.395)' }}>Visited Area</button>

            </div>
        </div>
    );
};

export default Contry;