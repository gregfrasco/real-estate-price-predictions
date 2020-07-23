import React, { FC } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { RoomOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const convertPrice = (price: number): string => {
  if (price > 1000000) {
    return `$${(price / 1000000).toFixed(1)}m`;
  }
  return `$${Math.floor(price / 1000)}k`;
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface ListingProps {
  MLSNUM: number;
  LISTPRICE: number;
  ADDRESS: string;
  CITY: string;
  PHOTOURL: string;
  BEDS: number;
  BATHS: number;
  SQFT: number;
}

const Listing: FC<ListingProps> = ({
  PHOTOURL,
  MLSNUM,
  LISTPRICE,
  ADDRESS,
  CITY,
  BEDS,
  BATHS,
  SQFT
  }) => {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <Grid container>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              style={{
                width: '100%',
                height: '100%',
              }}
              src={PHOTOURL}
              title={ADDRESS}
            />
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography className={classes.title} variant="h6" gutterBottom>
                {ADDRESS}
              </Typography>
              <Typography color="secondary">
                <RoomOutlined fontSize="small" color="secondary" />
                {CITY}
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                {convertPrice(LISTPRICE)}
              </Typography>
              <Typography className={classes.title} gutterBottom>
                {BEDS} Beds, {BATHS} Baths, {SQFT} SQFT
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
  );
};

export { Listing };
