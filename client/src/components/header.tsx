import React, { FC } from 'react';
import {AppBar, Card, Toolbar, Typography} from '@material-ui/core';
import { Home as HomeIcon } from '@material-ui/icons';
import { SelectCity } from "./select-city";

interface HeaderProps {
  title: string;
  showIcon?: boolean;
}

const Header: FC<HeaderProps> = ({ title, showIcon }) => {
  return (
    <AppBar position="static" style={{ background: '#2196f3' }}>
      <Toolbar>
        {showIcon && <HomeIcon />}
        <Typography variant="h6" color="inherit" noWrap style={{ marginLeft: '1rem', flex: 1 }}>
          {title}
        </Typography>
        <Card>
          <SelectCity />
        </Card>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
