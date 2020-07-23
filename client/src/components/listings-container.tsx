import React, { FC, useEffect, useState, Fragment } from 'react';
import { Box, Card, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { Listing } from '../components/listing';


const ListingsContainer: FC = () => {
  const { homes, flip, setFlip } = useFlip();
  const listings = homes.map((home) =>
    <Box paddingBottom={1}>
      <Listing
        key={home.MLSNUM}
        PHOTOURL={home.PHOTOURL}
        MLSNUM={home.MLSNUM}
        LISTPRICE={home.LISTPRICE}
        ADDRESS={home.ADDRESS}
        CITY={home.CITY}
        BEDS={home.BEDS}
        BATHS={home.BATHS}
        SQFT={home.SQFT}
      />
    </Box>
  );
  return (
    <ul>
      {listings}
    </ul>
  );
};

export { ListingsContainer };
