import React, { FC } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { RoomOutlined } from '@material-ui/icons';
// import { useHistory } from 'react-router-dom';

const convertPrice = (price: number): string => {
  if (price > 1000000) {
    return `$${(price / 1000000).toFixed(1)}m`;
  }
  return `$${Math.floor(price / 1000)}k`;
};

// interface ListingProps {
//   flip?: Listing;
// }

// const Listing: FC<ListingProps> = ({ flip }) => {
const Listing: FC = () => {

  const { flip } = useFlip();
  // const history = useHistory();
  if (!flip) {
    return null;
  }
  return (
    <Card>
      <CardMedia
        component="img"
        style={{
          width: '100%',
          height: '150px'
        }}
        src={flip.PHOTOURL}
        title={flip.ADDRESS}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">{flip.ADDRESS}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="secondary">
              <RoomOutlined fontSize="small" color="secondary" />
              {flip.CITY}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ textAlign: 'end' }} color="primary">
              <Typography component="span" color="secondary">
                Listed At{' '}
              </Typography>
              {convertPrice(flip.LISTPRICE)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export { Listing };