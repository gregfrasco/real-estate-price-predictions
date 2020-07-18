import React, { FC, Fragment } from 'react';
import { Header } from '../components/header';
import { Container, Grid } from '@material-ui/core';
import { Home } from '../components/home';
import { HomeSpecification } from '../components/home-specification';

const FlipScreen: FC = () => {
  return (
    <Fragment>
      <Header title={'Flip Listing'} />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={7}>
            <Home />
            <HomeSpecification />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export { FlipScreen };
