import React, { FC, Fragment } from 'react';
import { Header } from '../components/header';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const LandingScreen: FC = () => {
  const history = useHistory();
  return (
    <Fragment>
      <Header title={'Flipper'} showIcon />
      <Button onClick={() => history.push('/homes')}>View Homes</Button>
    </Fragment>
  );
};

export { LandingScreen };
