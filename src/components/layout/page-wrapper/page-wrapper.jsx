import React from 'react';
import {Outlet} from 'react-router-dom';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import { StyledPage } from './style.js';

function PageWrapper() {
	return (
		<>
			<Header />
			<StyledPage>
        <Outlet/>
			</StyledPage>
			<Footer />
		</>
	);
}

export default PageWrapper;
