import React, { FC, Fragment } from 'react';
import { Header } from '../components/header';
import { useFlip } from '../context/flip.context';

const LandingScreen: FC = () => {
  const { city } = useFlip();
  return (
    <Fragment>
      <Header title={'Flipper'} showIcon />
      {city}
    </Fragment>
  );
};

export { LandingScreen };
