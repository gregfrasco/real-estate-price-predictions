import React, { createContext, FC, useContext, useState } from 'react';
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

  return <FlipContext.Provider value={{ city, setCity, flip, setFlip, homes }} {...props} />;
};

const useFlip = () => useContext(FlipContext);

export { FlipProvider, useFlip };
