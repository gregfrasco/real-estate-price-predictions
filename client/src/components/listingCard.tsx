import React, { FC } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { RoomOutlined } from '@material-ui/icons';
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
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface ListingProps {
  listing: Listing;
}

const ListingCard: FC<ListingProps> = ({ listing }) => {
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
          </Grid>
        </Grid>
      </Card>
  );
};

export { ListingCard };
