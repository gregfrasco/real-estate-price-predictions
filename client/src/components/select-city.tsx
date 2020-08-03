import React, { FC, useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

const SelectCity: FC = () => {
  const classes = useStyles();
  const { city, setCity, availableCities } = useFlip();
  const [menuItems, setMenuItems] = useState();

  useEffect(() => {
    if (availableCities) {
      setMenuItems(availableCities.map((city, index) =>
        <MenuItem key={index} value={city}>{city}</MenuItem>
        )
      )
    }

  }, [availableCities]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event?.target?.value as string);
  };

  if (!city || !menuItems) {
    return null
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={city}
        onChange={handleChange}
        label="City"
      >
        // { !availableCities && <MenuItem value=""><em>Loading.</em></MenuItem> } // loading state
        { menuItems }
      </Select>
    </FormControl>
  );
};

export { SelectCity };
