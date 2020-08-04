import React, { FC, Fragment } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';
import { useFlip } from '../context/flip.context';
import { useHistory } from 'react-router-dom';


const convertPrice = (price: number): string => {
  if (price > 1000000) {
    return `$${(price / 1000000).toFixed(1)}m`;
  }
  return `$${Math.floor(price / 1000)}k`;
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

interface ListingProps {
  listing: Listing;
}

const FeaturedListingsCard: FC<ListingProps> = ({ listing }) => {
  const {
    PHOTOURL,
    LISTPRICE,
    ADDRESS,
    CITY,
    BEDS,
    BATHS,
    SQFT
  } = listing;

  const classes = useStyles();
  const history = useHistory();
  const { setFlip } = useFlip();

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardMedia
              component="img"
              style={{
                width: '100%',
                height: '100%',
              }}
              src={PHOTOURL}
              title={ADDRESS}
            />
            <CardContent>
              <Typography variant="h6">
                {ADDRESS}
              </Typography>
              <Typography color="secondary">
                {CITY}
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                {convertPrice(LISTPRICE)}
              </Typography>
              <Typography gutterBottom>
                {BEDS} Beds, {BATHS} Baths, {SQFT} SQFT
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary"
                onClick={() => {
                    setFlip(listing);
                    history.push('/flip');
                  }
                }
              >
              View Home
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export { FeaturedListingsCard }
