import React from 'react';

import Logo from '../../ui/logo/logo.jsx';
import Nav from '../nav/nav.jsx';

import { StyledHeader, StyledContainer } from './style';

function Header() {
	return (
		<StyledHeader>
			<StyledContainer>
				<Logo />
				<Nav />
			</StyledContainer>
		</StyledHeader>
	);
}

export default Header;
