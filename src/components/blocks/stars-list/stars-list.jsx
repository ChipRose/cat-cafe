import React, { useState } from 'react';

import CardList from '../../layout/cards-list/card-list.jsx';
import Button from '../../ui/button/button.jsx';
import FormNew from '../form-new/form-new.jsx';

import {
	StyledStarsList,
	StyledListContainer,
	StyledListTitle,
} from './style.js';

function StarsList() {
	const [isShowForm, setIsShowForm] = useState(false);

	return (
		<StyledStarsList>
			<StyledListContainer>
				<StyledListTitle level={2} size={36}>
					{'Наши звезды'}
				</StyledListTitle>
				<CardList />
				<Button minWidth={353} onClick={() => setIsShowForm(true)}>
					{'Добавить кота'}
				</Button>
				<FormNew isShow={isShowForm} onClose={() => setIsShowForm(false)} />
			</StyledListContainer>
		</StyledStarsList>
	);
}

export default StarsList;
