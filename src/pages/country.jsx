import React from 'react'
import Navbar from '../components/navbar'
import {useParams} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CountryPage() {
  const [country, setCountry] = useState([]);



const params = useParams();
console.log('params', params);
const url =`https://restcountries.com/v3.1/name/${params.countryName}`;


useEffect (()=> {
  async function displayOneCountry() {
    try {
      const countries = await axios.get(url);
      const countriesBox = countries.data;
      console.log('countriesBox', countriesBox[0])
      setCountry(countriesBox[0])
    } catch (error) {
      console.log(error)
    }

    } 

displayOneCountry();

}, [])
  console.log('country', country)

  return (
    <>
        <Navbar />
        <h1>Country's Page</h1>
    </>
    )
}
