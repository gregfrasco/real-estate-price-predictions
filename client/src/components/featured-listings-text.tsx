import React, { FC, Fragment } from 'react';
import { Typography, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const FeaturedListingsText: FC = () => {

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            <Box marginTop={5}>
              Featured Listings
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            <Box marginTop={2}>
              Find the perfect home to flip
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Fragment>
  );
};

export { FeaturedListingsText }
