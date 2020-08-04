import React, { FC } from 'react';
import { Card, CardMedia } from '@material-ui/core';


const LandingImage: FC = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        style={{
          width: '100%',
          height: '100%',
        }}
        src={"http://media.mlspin.com/photo.aspx?mls=72186637"}
        title={'Home page image'}
      />
    </Card>
  );
};

export { LandingImage }
