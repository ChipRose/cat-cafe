import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../mocks/const.js';

import PageWrapper from '../layout/page-wrapper/page-wrapper.jsx';
import MainPage from '../pages/main-page/main-page.jsx';
import BuyPage from '../pages/buy-page/buy-page.jsx';

import { ThemeProvider } from 'styled-components';
import { StarsProvider } from '../../context/stars-hook.js';
import { GalleryProvider } from '../../context/gallery-hook.js';
import { BuyOptionsProvider } from '../../context/buy-options-hook.js';

import theme from '../../theme/theme.js';
import { GlobalStyle } from './style.js';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<StarsProvider>
				<GalleryProvider>
					<BuyOptionsProvider>
						<GlobalStyle />
						<BrowserRouter>
							<Routes>
								<Route path={AppRoute.MAIN} element={<PageWrapper />}>
									<Route index element={<MainPage />} />
									<Route path={AppRoute.BUY} element={<BuyPage />} />
								</Route>
							</Routes>
						</BrowserRouter>
					</BuyOptionsProvider>
				</GalleryProvider>
			</StarsProvider>
		</ThemeProvider>
	);
}

export default App;
