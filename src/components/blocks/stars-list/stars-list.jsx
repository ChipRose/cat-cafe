import React, { useState } from 'react';

import CardList from '../../layout/cards-list/card-list.jsx';
import Button from '../../ui/button/button.jsx';
import FormNew from '../../ui/form-new/form-new.jsx';
import Title from '../../ui/title/title.jsx';

import {
	StyledStarsList,
	StyledListContainer,
} from './style.js';

function StarsList() {
	const [isShowForm, setIsShowForm] = useState(false);

	return (
		<StyledStarsList>
			<StyledListContainer>
				<Title level={2} $size={36} $margin={64} $align={'center'}>
					{'Наши звезды'}
				</Title>
				<CardList />
				<Button $minWidth={353} onClick={() => setIsShowForm(true)}>
					{'Добавить кота'}
				</Button>
				<FormNew isShow={isShowForm} onClose={() => setIsShowForm(false)} />
			</StyledListContainer>
		</StyledStarsList>
	);
}

export default StarsList;
