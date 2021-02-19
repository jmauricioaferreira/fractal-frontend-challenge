import React from 'react';
import AppPage from './page';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#122A4E',
      },
      secondary: {
        main: '#8BC34A',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppPage />
    </ThemeProvider>
  );
}

export default App;
