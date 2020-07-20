import React, { FC, Fragment } from 'react';
import { Header } from '../components/header';
import { Map } from '../components/map/map';
import { ListingsContainer } from '../components/listings-container';
import { Listing } from '../components/listing';
import { Container, Grid } from '@material-ui/core';

const HomesScreen: FC = () => {
  return (
    <Fragment>
      <Header title={'Flips for Sale'} />
      <Container>
        <Grid container direction="row" justify="space-between" alignItems="flex-start">
          <Grid container item xs={4} spacing={3}>
            <Listing />
          </Grid>
          <Grid container item xs={8} spacing={3}>
            <Map />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export { HomesScreen };
