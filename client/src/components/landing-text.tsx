import React, { FC, Fragment } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { SelectCity } from '../components/select-city';


const LandingText: FC = () => {
  const history = useHistory();


  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular" marginTop={5}>
              Find a Flip
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SelectCity />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => history.push('/homes')}>View Homes</Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export { LandingText }
