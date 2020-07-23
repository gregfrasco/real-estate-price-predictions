import React, { FC, Fragment } from 'react';
import { Header } from '../components/header';
import { Map } from '../components/map/map';
import { ListingsContainer } from '../components/listings-container';
import { Listing } from '../components/listing';
import { Box, Container, Grid } from '@material-ui/core';


const HomesScreen: FC = () => {
  return (
    <Fragment>
      <Box paddingBottom={4}>
        <Header title={'Flips for Sale'} />
      </Box>
      <Container>
        <Grid container direction="row" justify="space-between" alignItems="flex-start">
          <Grid container item xs={5} spacing={2}>
            <Box width="100%">
              <ListingsContainer />
            </Box>
          </Grid>
          <Grid container item xs={7} spacing={2}>
              <Map />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export { HomesScreen };
