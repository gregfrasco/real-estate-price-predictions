import React, { FC, Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';

const HomeDescription: FC = () => {
  const { flip } = useFlip();
  if (!flip) {
    return null;
  }
  return (
    <Fragment>
      <Typography variant="h6" style={{ marginTop: '1rem' }}>
        Home Description
      </Typography>
      <Typography style={{ marginTop: '1rem' }}>{flip.REMARKS}</Typography>
    </Fragment>
  );
};

export { HomeDescription };
