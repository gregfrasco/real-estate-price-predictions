import React, {createContext, FC, useContext, useState} from 'react';

export interface FlipContextProps {
    city: string
    setCity: (city: string) => void;
    flipMLS: string;
    setFlipMLS: (mls: string) => void;
}

const FlipContext = createContext({} as FlipContextProps);

const FlipProvider: FC = props => {
    const [city, setCity] = useState('Salem');
    const [flipMLS, setFlipMLS] = useState();

    return <FlipContext.Provider value={{city, setCity, flipMLS, setFlipMLS}} {...props} />;
};

const useFlip = () => useContext(FlipContext);

export {FlipProvider, useFlip};
