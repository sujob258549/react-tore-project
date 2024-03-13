import { useState } from "react";
import Contry from "./Contry";

const Countris = () => {
    const[countrys, setCountry] = useState([]);
    useState(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data));
        
    }, []);
    return (
        <div>
          <h2>country: {countrys.length}</h2>
         <div className='country-container'>
         {
            countrys.map(country => <Contry key={country.cca3} country={country}></Contry>)
          }
         </div>
        </div>
    );
};

export default Countris;