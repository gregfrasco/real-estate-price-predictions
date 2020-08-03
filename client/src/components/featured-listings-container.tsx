import React, { FC, Fragment } from 'react';
import { Box } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { FeaturedListingsCard } from '../components/featured-listings-card';
import Grid from '@material-ui/core/Grid';



const FeaturedListingsContainer: FC = () => {
  const { homes } = useFlip();
  const featuredHomes = [];
  var i = 0;
  for (const home of homes) {
    if (i <= 2) {
      featuredHomes.push(
        <Grid item xs={4}>
          <Box paddingBottom={1}>
            <FeaturedListingsCard
              key={home.MLSNUM}
              listing={home}
            />
          </Box>
        </Grid>
      )
      i++;
    }
  }

  return (
    <Fragment>
      <Grid container spacing={2}>
        {featuredHomes}
      </Grid>
    </Fragment>
  );
};

export { FeaturedListingsContainer };
