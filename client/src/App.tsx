import React, {Fragment} from 'react';
import {AppRouter} from "./app-router";
import {FlipProvider} from "./context/flip.context";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2289FF'
        }
    }
});

function App() {
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <FlipProvider>
                    <AppRouter/>
                </FlipProvider>
            </ThemeProvider>
        </Fragment>
    );
}

export default App;
