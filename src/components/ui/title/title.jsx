import React from 'react';

import { StyledTitle } from './style.js';

function Title({...props}) {
	return (
		<StyledTitle as = {`h${props.level}`} $size={props.fontSize} className={props.className}>
			{props.children}
		</StyledTitle>
	);
}

export default Title;
