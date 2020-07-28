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
  const [availableCities, setAvailableCities] = useState(['Boston', 'Mexico']);
  const [city, setCity] = useState('Boston');
  const [flip, setFlip] = useState();
  const [homes, setHomes] = useState((exampleHomes as unknown) as Listing[]);

  useEffect(() => {
    if (availableCities) {
      fetch(`api/allCities`)
        .then(res => res.json())
        .then(data => setAvailableCities(data));
    }
  }, [availableCities]);

  useEffect(() => {
    if (city) {
      fetch(`api/listings/${city}`)
        .then(res => res.json())
        .then(data => setHomes(data));
    }
  }, [city, setHomes]);

  return <FlipContext.Provider value={{ city, setCity, flip, setFlip, homes, availableCities }} {...props} />;
};

const useFlip = () => useContext(FlipContext);

export { FlipProvider, useFlip };
