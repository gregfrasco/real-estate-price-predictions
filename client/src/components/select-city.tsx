import React, { FC, useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Autocomplete } from '@material-ui/lab';
import { useFlip } from '../context/flip.context';
import { TextField} from "@material-ui/core";


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

  if (!city || !menuItems) {
    return null
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Autocomplete
          value={city}
          onChange={(event, newValue) => {
            if(newValue) {
              setCity(newValue as string);
            }
          }}
          autoHighlight
          renderInput={(params) => (
              <TextField
                  {...params}
                  placeholder="Select City"
                  variant="outlined"
                  inputProps={{
                      ...params.inputProps
                  }}
              />
          )}
          options={availableCities}/>
    </FormControl>
  );
};

export { SelectCity };
