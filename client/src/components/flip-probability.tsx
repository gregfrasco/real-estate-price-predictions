import React, { FC, useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';

const FlipProbability: FC = () => {
  const { flip } = useFlip();
  const [probability, setProbability] = useState(0);
  useEffect(() => {
    if (flip) {
      setProbability(86);
    }
  }, [flip]);
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
              {`${probability}%`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export { FlipProbability };
