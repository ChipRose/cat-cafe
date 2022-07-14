import React, { useEffect, useRef, useState } from 'react';

import Button from '../button/button.jsx';

import { TitleWrapper, Wrapper, ContentWrapper } from './style.js';

function AccordionItem({
	titleComponent,
	textComponent,
	title,
	description,
	isOpen,
	isHTML,
	onClick,
	...props
}) {
	const [height, setHeight] = useState(0);
	const contentWrapper = useRef(null);
	const TitleComponent = titleComponent;
	const TextComponent = textComponent || 'div';

	useEffect(() => {
		setHeight(contentWrapper.current.offsetHeight);
	}, [description]);

	return (
		<>
			<TitleWrapper>
				{TitleComponent ? (
					<TitleComponent>{description}</TitleComponent>
				) : (
					title
				)}
				<Button
					typeOfButton={'accordion'}
					onClick={onClick}
					title={`${isOpen ? 'Скрыть' : 'Показать'} описание`}
          isOpen={isOpen}
				></Button>
			</TitleWrapper>
			<Wrapper height={height} isOpen={isOpen}>
				<ContentWrapper ref={contentWrapper}>
					{isHTML ? (
						<TextComponent dangerouslySetInnerHTML={{ __html: description }} />
					) : (
						<TextComponent>{description}</TextComponent>
					)}
				</ContentWrapper>
			</Wrapper>
		</>
	);
}
export default AccordionItem;
