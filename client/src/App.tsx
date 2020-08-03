import React, { Fragment } from 'react';
import { AppRouter } from './app-router';
import { FlipProvider } from './context/flip.context';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2289FF'
    },
    secondary: {
      main: '#666'
    },
    // background: {
    //   default: "#ebebeb"
    // },
  }
});

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FlipProvider>
          <AppRouter />
        </FlipProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
