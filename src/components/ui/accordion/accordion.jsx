import React, { useState } from 'react';

import AccordionItem from './accordion-item.jsx';

import {BuyList, BuyField} from './style.js';

function Accordion({ 
  content, 
  titleComponent,
  textComponent,
  isHTML,
}) {
	const [openItemIndex, setOpenItemIndex] = useState(null);

	return (
		<BuyList>
			{content &&
				content.map(({id, title, description}, index) => (
					<BuyField key={id}>
						<AccordionItem
							titleComponent={titleComponent}
							textComponent={textComponent}
							title={title}
							description={description}
							isOpen={openItemIndex === index}
              isHTML={isHTML}
							onClick={() => {
								setOpenItemIndex(index !== openItemIndex ? index : null);
							}}
						/>
					</BuyField>
				))}
		</BuyList>
	);
}
export default Accordion;
