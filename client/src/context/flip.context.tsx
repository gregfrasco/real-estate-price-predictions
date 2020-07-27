import React, { createContext, FC, useContext, useState, useEffect } from 'react';
import exampleHomes from './example-data.json';

export interface FlipContextProps {
  city: string;
  setCity: (city: string) => void;
  flip: Listing;
  setFlip: (mls: Listing) => void;
  homes: Listing[];
  availableCities: string[];
}

const FlipContext = createContext({} as FlipContextProps);

const FlipProvider: FC = props => {
  const [availableCities, setAvailableCities] = useState([]);
  const [city, setCity] = useState('Boston');
  const [flip, setFlip] = useState();
  const [homes, setHomes] = useState((exampleHomes as unknown) as Listing[]);
  useEffect(() => {
    //runs once, gets all available cities
    //data request to get all available cities
    //setAvailableCities(response-from-fetch)
  }, []);

  useEffect(() => {
    if (city) {
      //data request to get homes in certain city
      //setHomes(response-from-fetch);
      console.log('change in city:' + city)
    }
  }, [city, setHomes]);

  return <FlipContext.Provider value={{ city, setCity, flip, setFlip, homes, availableCities }} {...props} />;
};

const useFlip = () => useContext(FlipContext);

export { FlipProvider, useFlip };
