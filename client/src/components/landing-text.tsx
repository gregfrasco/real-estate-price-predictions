import React, { FC, Fragment } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { useFlip } from '../context/flip.context';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const LandingText: FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const { city, setCity } = useFlip();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value as string);
  };

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">
              Find a Flip
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={city}
              onChange={handleChange}
              label="City"
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            //map availableCities in this section
            <MenuItem value={'Boston'}>Boston</MenuItem>
            <MenuItem value={'MexicoCity'}>Mexico City</MenuItem>
            <MenuItem value={'London'}>London</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => history.push('/homes')}>View Homes</Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export { LandingText }
