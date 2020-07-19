import React, { FC, Fragment } from 'react';
import { Chip, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.5)
  }
}));

const HomeSpecification: FC = () => {
  const classes = useStyles();
  const { flip } = useFlip();
  if (!flip) {
    return null;
  }
  return (
    <Fragment>
      <Typography variant="h6" style={{ marginTop: '1rem' }}>
        Home Specification
      </Typography>
      <Chip className={classes.chip} label={`${flip.BEDS} Bedrooms`} />
      <Chip className={classes.chip} label={`${flip.BATHS} Bathrooms`} />
      <Chip className={classes.chip} label={`${flip.SQFT} sqft`} />
      {flip.STYLE && <Chip className={classes.chip} label={`${flip.STYLE}`} />}
    </Fragment>
  );
};

export { HomeSpecification };
