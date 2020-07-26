import React, { FC, useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { ListingCard } from '../components/listingCard';


const ListingsContainer: FC = () => {
  const { homes, flip, setFlip } = useFlip();
  const [listings, setListings] = useState();
  useEffect(() => {
    setListings(
      homes.map((home) => {
        return (
          <Box paddingBottom={1}>
            <ListingCard
              key={home.MLSNUM}
              listing={home}
              onClick={() => setFlip(home)}
            />
          </Box>
        );
      })
    );
  }, [flip, setFlip, homes, setListings]);

  return (
    <ul>
      {listings}
    </ul>
  );
};

export { ListingsContainer };
