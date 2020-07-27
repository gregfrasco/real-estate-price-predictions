import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { ListingCard } from '../components/listingCard';


const ListingsContainer: FC = () => {
  const { homes } = useFlip();
  const listings = homes.map((home) => {
    return (
      <Box paddingBottom={1}>
        <ListingCard
          key={home.MLSNUM}
          listing={home}
        />
      </Box>
    );
  })

  return (
    <ul>
      {listings}
    </ul>
  );
};

export { ListingsContainer };
