import React from 'react';

import { navButtons } from '../../../mocks/nav-buttons.js';
import { useLocation } from 'react-router-dom';

function Nav() {
	const pageUrl = useLocation().pathname;
  console.log(pageUrl,navButtons);

	return (
		<nav>
			{navButtons
				.filter((button) => button.to !== pageUrl)
				.map((button) => button.button)}
		</nav>
	);
}

export default Nav;
