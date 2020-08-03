import React, { createContext, FC, useContext, useState, useEffect } from 'react';
import exampleHomes from './example-data.json';

export interface FlipContextProps {
  city: string;
  setCity: (city: string) => void;
  flip: Listing;
  setFlip: (mls: Listing) => void;
  homes: Listing[];
  availableCities: string[];
  probability: number;
}

const FlipContext = createContext({} as FlipContextProps);

const FlipProvider: FC = props => {
  const [probability, setProbability] = useState();
  const [city, setCity] = useState();
  const [flip, setFlip] = useState();
  const [homes, setHomes] = useState((exampleHomes as unknown) as Listing[]);
  const [availableCities, setAvailableCities] = useState();

  useEffect(() => {
    if (flip) {
      fetch(`/api/predict/${flip.MLSNUM}`)
        .then(res => res.json())
        .then(res => {
          setProbability(res.score);
        });
    }
  }, [flip]);

  useEffect(() => {
    if (city) {
      fetch(`api/listings/${city}`)
        .then(res => res.json())
        .then(data => setHomes(data));
    }
  }, [city, setHomes]);

  useEffect(() => {
    // if (availableCities) {
    fetch(`api/allCities`)
      .then(res => res.json())
      .then(data => {
        var cities = []
        for (var c of data) {
          cities.push(c[0])
        }
        cities.sort();
        setAvailableCities(cities);
        setCity('Boston');
      }
    )

  }, []);

  return <FlipContext.Provider value={{ city, setCity, flip, setFlip, homes, availableCities, probability }} {...props} />;
};

const useFlip = () => useContext(FlipContext);

export { FlipProvider, useFlip };
