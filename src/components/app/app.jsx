import React from 'react';

import theme from '../../theme/theme.js';
import PageWrapper from '../layout/page-wrapper/page-wrapper';

import { StarProvider } from '../../context/stars-context';
import { GlobalStyle } from './style.js';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StarProvider>
        <GlobalStyle />
        <PageWrapper />
      </StarProvider>
    </ThemeProvider>
  );
}

export default App;
