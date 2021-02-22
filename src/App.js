import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppPage from './page';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import AppRoutes from './routes';

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppPage />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
