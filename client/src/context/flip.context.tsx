import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import exampleHomes from './example-data.json';

export interface FlipContextProps {
  city: string;
  setCity: (city: string) => void;
  flip: Listing;
  setFlip: (mls: Listing) => void;
  homes: Listing[];
}

const FlipContext = createContext({} as FlipContextProps);

const FlipProvider: FC = props => {
  const [city, setCity] = useState('Boston');
  const [flip, setFlip] = useState();
  const [homes] = useState((exampleHomes as unknown) as Listing[]);
  useEffect(() => {
    if (flip) {
      fetch(`/api/predict/${flip.MLSNUM}`)
        .then(res => res.json())
        .then(res => {
          flip.flipScore = res.score;
        });
    }
  }, [flip]);
  return <FlipContext.Provider value={{ city, setCity, flip, setFlip, homes }} {...props} />;
};

const useFlip = () => useContext(FlipContext);

export { FlipProvider, useFlip };
