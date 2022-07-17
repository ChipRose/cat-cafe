import React from 'react';

import Logo from '../../ui/logo/logo.jsx';
import Copyright from '../../ui/copyright/copyright.jsx';

import { StyledFooter, FooterContainer } from './style';

function Footer() {
	return (
		<StyledFooter>
			<FooterContainer>
				<Logo />
				<Copyright />
			</FooterContainer>
		</StyledFooter>
	);
}

export default Footer;
