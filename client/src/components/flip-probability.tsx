import React, { FC } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';

const FlipProbability: FC = () => {
  const { flip, probability } = useFlip();
  if (!flip) {
    return null;
  }
  return (
    <Card style={{ marginTop: '1rem' }}>
      <CardContent>
        <Grid container>
          <Grid item xs={7}>
            <Typography>Flip Probability</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h6" style={{ textAlign: 'end' }}>
              {Math.floor(probability)}%
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export { FlipProbability };
