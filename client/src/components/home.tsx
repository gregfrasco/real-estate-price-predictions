import React, { FC } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { RoomOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const convertPrice = (price: number): string => {
  if (price > 1000000) {
    return `$${(price / 1000000).toFixed(1)}m`;
  }
  return `$${Math.floor(price / 1000)}k`;
};

const color = { color: '#aaa' };

interface HomeProps {
  viewHome?: boolean;
}

const Home: FC<HomeProps> = ({ viewHome }) => {
  const { flip } = useFlip();
  const history = useHistory();
  if (!flip) {
    return null;
  }
  return (
    <Card>
      <CardMedia
        component="img"
        style={{
          width: '100%',
          height: '200px'
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
            <Typography style={color}>
              <RoomOutlined fontSize="small" style={color} />
              {flip.CITY}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ textAlign: 'end' }} color="primary">
              <span style={color}>Listed At </span>
              {convertPrice(flip.LISTPRICE)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      {viewHome && (
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              history.push('/flip');
            }}
          >
            View Home
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export { Home };
