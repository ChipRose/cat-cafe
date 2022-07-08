import React from 'react';

import theme from '../../theme/theme.js';
import PageWrapper from '../layout/page-wrapper/page-wrapper.jsx';

import { Provider } from '../../context/stars-context.js';
import { GlobalStyle } from './style.js';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <GlobalStyle />
        <PageWrapper />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
