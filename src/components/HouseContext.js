import React, { useState, useEffect, createContext } from 'react';

// import Data
import { housesData } from '../data';

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
   const [houses, setHouses] = useState(housesData);
   const [country, setCountry] = useState('Location (any)');
   const [countries, setCountries] = useState([]);
   const [property, setProperty] = useState('Property Type (any)');
   const [properties, setProperties] = useState([]);
   const [price, setPrice] = useState('Price range (any)');
   const [loading, setLoading] = useState(false);

   // return all countries
   useEffect(() => {
      const allCountries = houses.map((house) => house.country);

      console.log(allCountries);

      // remove duplicates
      const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

      console.log(uniqueCountries);
      // set countries state
      setCountries(uniqueCountries);
   }, []);

   return (
      <HouseContext.Provider
         value={{
            country,
            setCountry,
            countries,
            property,
            setProperty,
            properties,
            price,
            setPrice,
            houses,
            loading,
         }}
      >
         {children}
      </HouseContext.Provider>
   );
};

export default HouseContextProvider;
