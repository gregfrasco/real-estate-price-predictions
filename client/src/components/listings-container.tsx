import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { ListingCard } from '../components/listingCard';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '620px',
      overflow: 'scroll',
    },
  }),
);

const ListingsContainer: FC = () => {
  const { homes } = useFlip();
  const classes = useStyles();
  const listings = homes.map((home) => {
    return (
      <Box paddingBottom={1}>
        <ListingCard
          key={home.MLSNUM}
          listing={home}
        />
      </Box>
    );
  })

  return (
    <div className={classes.root}>
      <ul>
        {listings}
      </ul>
    </div>
  );
};

export { ListingsContainer };
