import React, { FC, Fragment } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const LandingText: FC = () => {
  const history = useHistory();

  return (
    <Fragment>
      <Box paddingTop={5} marginLeft={5}>
        <Typography variant="h2" gutterBottom>
          Find a Flip
        </Typography>
        <Button variant="contained" color="primary" onClick={() => history.push('/homes')}>View Homes</Button>
      </Box>
    </Fragment>
  );
};

export { LandingText }
