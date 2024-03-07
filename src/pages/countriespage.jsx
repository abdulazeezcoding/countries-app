import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CountriesPage() {
  const [country, setCountry] = useState([]);
    const url = 'https://restcountries.com/v3.1/all';


  useEffect (()=> {
    async function displayAllCountries() {
      try {
        const countries = await axios.get(url);
        const countriesBox = countries.data;
        setCountry(countriesBox)
      } catch (error) {
        console.log(error)
      }

      } 
  

  displayAllCountries();

  }, [])
    console.log('country', country)
 
  return (
    <>
      <Navbar />
      <h1>Countries Page</h1>
      <div className="outer-div">
        {country.slice(100,110).map((item)=> (
        <div className="inner-div">
         <div className="img-div"> <img src={item.flags.png} alt={item.flags.alt} className="flag" /> </div>
          <h2>{item.name.common}</h2>
          <h3>{item.name.official}</h3>
          <Link to={`/country/${item.name.common}`}><button className="btn">Learn More</button></Link>
        </div>    
        ))}
      </div>
    </>
  );
}
