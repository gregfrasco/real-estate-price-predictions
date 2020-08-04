import React, { FC, Fragment } from 'react';
import { Header } from '../components/header';
import { Container, Grid } from '@material-ui/core';
import { Home } from '../components/home';
import { HomeSpecification } from '../components/home-specification';
import { HomeDescription } from '../components/home-description';
import { FlipProbability } from '../components/flip-probability';

const FlipScreen: FC = () => {
  return (
    <Fragment>
      <Header title={'Flip Listing'} hideCitySelect />
      <Container>
        <Grid container spacing={2} style={{marginTop: '1rem'}}>
          <Grid item xs={12} sm={6} md={7}>
            <Home largeImage />
            <HomeSpecification />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <FlipProbability />
            <HomeDescription />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export { FlipScreen };
