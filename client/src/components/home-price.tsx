import React, { FC, Fragment, useEffect, useState } from 'react';
import { Card, Grid, List, ListItem, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';

const convertPrice = (price: number): string => {
  if (price > 1000000) {
    return `$${(price / 1000000).toFixed(1)}m`;
  }
  return `$${Math.floor(price / 1000)}k`;
};

const HomePrice: FC = () => {
  const { flip } = useFlip();
  const [estSoldPrice, setEstSoldPrice] = useState();
  const [priceAfterRenovations, setPriceAfterRenovations] = useState();
  const [profit, setProfit] = useState();
  useEffect(() => {
    if (flip) {
      const soldPrice = flip.LISTPRICE * 1.1;
      const priceAfterRenovations = soldPrice * 1.4;
      const profit = priceAfterRenovations - soldPrice;
      setEstSoldPrice(soldPrice);
      setPriceAfterRenovations(priceAfterRenovations);
      setProfit(profit);
    }
  }, [flip]);
  if (!flip) {
    return null;
  }

  return (
    <Fragment>
      <Card>
        <List>
          <ListItem>
            <Grid container>
              <Grid item xs={8}>
                <Typography color="secondary">Estimated Sold Price</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="secondary" variant="h6" style={{ textAlign: 'end' }}>
                  {convertPrice(estSoldPrice)}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container>
              <Grid item xs={8}>
                <Typography>Estimated Price After Renovations</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" style={{ textAlign: 'end' }}>
                  {convertPrice(priceAfterRenovations)}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container>
              <Grid item xs={8}>
                <Typography>Profit</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" color="textSecondary" style={{ textAlign: 'end' }}>
                  {convertPrice(profit)}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Card>
    </Fragment>
  );
};

export { HomePrice };
