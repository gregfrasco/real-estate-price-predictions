import React, { FC, Fragment } from 'react';
import { Typography, Box, Card, CardContent, CardMedia, } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const FeaturedListingsCard: FC = () => {
  const classes = useStyles();

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
              src={'http://media.mlspin.com/photo.aspx?mls=72186637'}

            />
            <CardContent>
              <Typography variant="h6">
                43 Water Ln
              </Typography>
              <Typography color="secondary">
                Boston
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                $4.1m
              </Typography>
              <Typography gutterBottom>
                5 Beds, 3 Baths, 1757 SQFT
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export { FeaturedListingsCard }
