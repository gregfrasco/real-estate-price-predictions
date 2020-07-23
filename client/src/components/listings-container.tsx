import React, { FC, useEffect, useState, Fragment } from 'react';
import { Box, Card, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { Listing } from '../components/listing';


const ListingsContainer: FC = () => {
  const { homes, flip, setFlip } = useFlip();
  const listings = homes.map((home) =>
    //aqui pondria Listing con sus props
    // <Listing key={home.MLSNUM} MLSNUM={home.MLSNUM} LISTPRICE={home.LISTPRICE} CITY={home.CITY} />
    <Box paddingTop={1}>
      <Listing key={home.MLSNUM} LISTPRICE={home.LISTPRICE} />
    </Box>
  );
  return (
    <ul>
      {listings}
    </ul>
  );
};

export { ListingsContainer };
