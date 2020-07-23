import React, { FC } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { RoomOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


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

// const theme = createMuiTheme({
//   palette: {
//     primary: blue,
//   },
// });

interface ListingProps {
  // MLSNUM: number;
  // STATUS: string;
  LISTPRICE: number;
  // SOLDPRICE?: number | null;
  // LISTDATE: string;
  // ADDRESS: string;
  // CITY: string;
  // STATE: string;
  // ZIP: number;
  // BEDS: number;
  // BATHS: number;
  // SQFT: number;
  // AGE: number;
  // LOTSIZE?: number | null;
}
// const ListingProps

const Listing: FC<ListingProps> = ({ LISTPRICE }) => {
  const classes = useStyles();

  return (

      <Card className={classes.root}>
        <Box  bgcolor="warning.main">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Houses
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {LISTPRICE}
            </Typography>
            <CardActions>
              <Button variant="contained" color="primary">Learn More</Button>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
  );
};

export { Listing };
