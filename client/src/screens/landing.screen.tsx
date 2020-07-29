import React, { FC, Fragment } from 'react';
import { Header } from '../components/header';
import { Box, Container, Grid } from '@material-ui/core';
import { LandingText } from '../components/landing-text';
import { LandingImage} from '../components/landing-image';
import { FeaturedListingsText } from '../components/featured-listings-text';
import { FeaturedListingsCard } from '../components/featured-listings-card';


const LandingScreen: FC = () => {
  return (
    <Fragment>
      <Header title={'Flipper'} showIcon />
      <Container>
        <Grid container direction="row" justify="space-between" alignItems="flex-start">
          <Grid container item xs={12}>
            <Box width="100%" marginTop={5} marginBottom={3}></Box>
          </Grid>
          <Grid container item xs={6}>
            <Box width="100%" marginTop={5} ml={5} marginBottom={5}>
              <LandingText />
            </Box>
          </Grid>
          <Grid container item xs={6} spacing={2}>
            <Box width="100%" marginTop={5} marginBottom={5}>
              <LandingImage />
            </Box>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Box marginTop={5}>
              <FeaturedListingsText />
            </Box>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Box marginTop={5} marginBottom={5} m={3}>
              <FeaturedListingsCard />
            </Box>
            <Box marginTop={5} marginBottom={5} m={3}>
              <FeaturedListingsCard />
            </Box>
            <Box marginTop={5} marginBottom={5} m={3}>
              <FeaturedListingsCard />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export { LandingScreen };
