import React from 'react';

import Header from '../header/header.jsx';
//import MainPage from "../../pages/main-page/main-page";
import BuyPage from '../../pages/buy-page/buy-page.jsx';
import Footer from '../footer/footer.jsx';

import { StyledPage } from './style.js';

function PageWrapper() {
	return (
		<>
			<Header />
			<StyledPage>
				<BuyPage />
			</StyledPage>
			<Footer />
		</>
	);
}

export default PageWrapper;
