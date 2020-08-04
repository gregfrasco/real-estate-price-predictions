import React, { FC } from 'react';
import {AppBar, Card, Toolbar, Typography, Box} from '@material-ui/core';
import { Home as HomeIcon } from '@material-ui/icons';
import { SelectCity } from "./select-city";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '80px',
    },
  }),
);

interface HeaderProps {
  title: string;
  showIcon?: boolean;
  hideCitySelect?: boolean;
}

const Header: FC<HeaderProps> = ({ title, showIcon, hideCitySelect }) => {
  const classes = useStyles();
  const history = useHistory();


  return (
    <AppBar position="static" style={{ background: '#333333' }} className={classes.root}>
      <Box marginTop={1} marginBottom={1}>
      <Toolbar>
        <HomeIcon
          onClick={() => {
            history.push('/')
          }
        }
        />
        {showIcon}
        <Typography variant="h6" color="inherit" noWrap style={{ marginLeft: '1rem', flex: 1 }}>
          {title}
        </Typography>
        <Card>
            {!hideCitySelect && <SelectCity />}
        </Card>
      </Toolbar>
      </Box>
    </AppBar>
  );
};

export { Header };
