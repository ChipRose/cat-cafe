import React, { useState } from 'react';

import theme from '../../theme/theme.js';
import starsData from '../../mocks/stars-data.js';
import CatInfoContext from '../../util/context.js';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { ThemeProvider } from 'styled-components';

function App() {
  const [starsInfo, setStarInfo] = useState(starsData);
  return (
    <ThemeProvider theme={theme}>
      <CatInfoContext.Provider value={{starsInfo}}>
        <PageWrapper />
      </CatInfoContext.Provider>
    </ThemeProvider>
  );
}

export default App;
