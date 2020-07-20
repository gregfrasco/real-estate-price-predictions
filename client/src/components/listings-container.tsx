import React, { FC, useEffect, useState, Fragment } from 'react';
import { Card, Typography } from '@material-ui/core';
import { useFlip } from '../context/flip.context';
import { Listing } from '../components/listing';


const ListingsContainer: FC = () => {
  const { homes, flip, setFlip } = useFlip();
  //loop through homes and display
  return (
    <Fragment>
      <div>
      {React.Children.map(homes, (child, i) => {
          console.log(child)
          return <Listing>{child}</Listing>
        })}
      </div>
    </Fragment>
  );
};

export { ListingsContainer };
