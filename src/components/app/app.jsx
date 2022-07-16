import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../mocks/const.js';

import PageWrapper from '../layout/page-wrapper/page-wrapper.jsx';
import MainPage from '../pages/main-page/main-page.jsx';
import BuyPage from '../pages/buy-page/buy-page.jsx';

import { Provider } from '../../context/stars-context.js';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme/theme.js';
import { GlobalStyle } from './style.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path={AppRoute.MAIN} element={<PageWrapper/>}>
                <Route index element={<MainPage/>}></Route>
                <Route path={AppRoute.BUY.replace(AppRoute.MAIN,'')} element={<BuyPage/>}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
