import React, { FC, useEffect, useState, Fragment } from 'react';
import { Box, Card, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { ListingCard } from '../components/listingCard';


const ListingsContainer: FC = () => {
  const { homes, flip, setFlip } = useFlip();
  const listings = homes.map((home) =>
    <Box paddingBottom={1}>
      <ListingCard
        key={home.MLSNUM}
        listing={home}
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
