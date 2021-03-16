import React from 'react';
import Router from "./routes/Router";
import { BrowserRouter } from 'react-router-dom';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
