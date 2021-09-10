import React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/core';

import THEME from './theme';
import Header from './layout/Header';

function App(): JSX.Element {
  React.useEffect(() => {
    window.eva.replace();
  }, []);

  return (
    <ThemeProvider theme={THEME.theme}>
      <StylesProvider injectFirst>
        <Header />
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
