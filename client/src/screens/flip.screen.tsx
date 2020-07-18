import React, { FC, Fragment } from 'react';
import { Header } from '../components/header';
import { Container, Grid } from '@material-ui/core';
import { Home } from '../components/home';

const FlipScreen: FC = () => {
  return (
    <Fragment>
      <Header title={'Flip Listing'} />
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Home />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export { FlipScreen };
