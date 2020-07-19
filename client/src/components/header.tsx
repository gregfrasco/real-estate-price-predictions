import React, { FC, useState } from 'react';
import { Box, IconButton, TextField, Toolbar, Typography } from '@material-ui/core';
import { Home as HomeIcon, Search as SearchIcon } from '@material-ui/icons';
import { useFlip } from '../context/flip.context';

interface HeaderProps {
  title: string;
  showIcon?: boolean;
}

const Header: FC<HeaderProps> = ({ title, showIcon }) => {
  const { city, setCity } = useFlip();
  const [searching, setSearching] = useState(false);
  return (
    <Toolbar>
      {showIcon && <HomeIcon />}
      <Typography variant="h6" color="inherit" noWrap style={{ marginLeft: '1rem', flex: 1 }}>
        {title}
      </Typography>
      {searching && (
        <Box>
          <TextField variant="outlined" value={city} onChange={e => setCity(e.target.value)} />
        </Box>
      )}
      <IconButton onClick={() => setSearching(!searching)}>
        <SearchIcon />
      </IconButton>
    </Toolbar>
  );
};

export { Header };
