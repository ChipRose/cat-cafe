import React, { useState, useEffect } from 'react';

import InputImage from '../input-image/input-image';
import { useStars } from '../../../context/stars-hook.js';
import Button from '../button/button.jsx';

import {
	StyledFormWrapper,
	StyledForm,
	InputBlock,
	ButtonsBlock,
	StyledNameInput,
	NewFormTextarea,
} from './style.js';

function FormNew({ isShow, onClose }) {
	const { addCard } = useStars();
	const [starPhoto, setStarPhoto] = useState('');
	const [starName, setStarName] = useState('');
	const [aboutText, setAboutText] = useState('');
	const [dataPublish, setData] = useState(new Date());

	useEffect((onClose) => {
		const handlerEsc = (evt) => {
			if (evt.key === 'Escape') {
				onClose && onClose();
			}
		};
		document.addEventListener('keydown', handlerEsc);
		return () => {
			document.removeEventListener('keydown', handlerEsc);
		};
	}, []);

	const isButtonEnable = starName && aboutText && starPhoto;

	return isShow ? (
		<StyledFormWrapper>
			<StyledForm
				onSubmit={(evt) => {
					evt.preventDefault();
					setData(new Date());
					addCard({
						starName,
						aboutText,
						starPhoto,
						dataPublish,
						feature: 'empty',
					});
					setStarName('');
					setAboutText('');
					setStarPhoto('');
				}}
			>
				<Button typeOfButton="close" onClick={onClose} />
				<InputBlock>
					<InputImage photoPreview={starPhoto} setPhoto={setStarPhoto}>
						{'Загрузить фото'}
					</InputImage>
					<StyledNameInput
						type="text"
						placeholder="Кличка кота"
						name="name"
						value={starName}
						onChange={(evt) => setStarName(evt.target.value)}
					/>
					<NewFormTextarea
						placeholder="Напишите пару слов"
						name="about"
						value={aboutText}
						onChange={(evt) => setAboutText(evt.target.value)}
					/>
				</InputBlock>
				<ButtonsBlock>
					<Button type="submit" disabled={!isButtonEnable} $minWidth={260}>
						{'Сохранить'}
					</Button>
					<Button type="button" onClick={onClose} $minWidth={260}>
						{'Отменить'}
					</Button>
				</ButtonsBlock>
			</StyledForm>
		</StyledFormWrapper>
	) : null;
}

export default FormNew;
