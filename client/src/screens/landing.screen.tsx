import React, { FC, Fragment } from 'react';
import { Header } from '../components/header';
import { Box, Container, Grid, Button } from '@material-ui/core';
import { LandingText } from '../components/landing-text';
import { LandingImage} from '../components/landing-image';

const LandingScreen: FC = () => {
  return (
    <Fragment>
      <Header title={'Flipper'} showIcon />
      <Container>
        <Grid container direction="row" justify="space-between" alignItems="flex-start">
          <Grid container item xs={6} spacing={2}>
            <Box width="100%">
              <LandingText />
            </Box>
          </Grid>
          <Grid container item xs={6} spacing={2}>
            <Box width="100%">
              <LandingImage />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export { LandingScreen };
