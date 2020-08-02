import React, { FC, Fragment } from 'react';
import { Box } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { FeaturedListingsCard } from '../components/featured-listings-card';


const FeaturedListingsContainer: FC = () => {
  const { homes } = useFlip();
  const featuredHomes = [];
  var i = 0;
  for (const home of homes) {
    if (i <= 2) {
      featuredHomes.push(
        <Box paddingBottom={1}>
          <FeaturedListingsCard
            key={home.MLSNUM}
            listing={home}
          />
        </Box>
      )
      i++;
    }
  }

  return (
    <Fragment>
      {featuredHomes}
    </Fragment>
  );
};

export { FeaturedListingsContainer };
