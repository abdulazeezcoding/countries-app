import React, { useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";

export default function CountriesPage() {
    const url = 'https://restcountries.com/v3.1/all';
    // const [countries, setCountries] = useState([fiveItems]);

    // let countriesBox;
    // let fiveItems = countries;


    async function displayAllCountries() {
        const countries = await axios.get(url);
        const countriesBox = countries.data;
      // console.log(countries);
        const slicedData = countriesBox.slice(0,5)
         slicedData.map((item)=> {
          // fiveItems.push(item.name.common)
          console.log('country:', item.name.common);
        })
        // console.log(fiveItems)
        return countries;
    }

    displayAllCountries();


  return (
    <>
      <Navbar />

    
      <p>Countries Page</p>
    </>
  );
}
