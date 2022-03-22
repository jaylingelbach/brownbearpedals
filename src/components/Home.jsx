import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export default function HowItWorks() {

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App-body">
        <a href='/' id='build-link'> Build it</a>
      </div>
    </ThemeProvider>
  );
}
