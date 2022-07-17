import React, { useEffect } from 'react';

import successImg from '../../../assets/icons/success.svg';

import Button from '../button/button.jsx';
import Title from '../../ui/title/title.jsx';

import {
	SuccesStateWrapper,
	ImageWrapper,
	TextWrapper,
	Paragraph,
} from './style.js';

function SuccesState({ type, duration, price, isShow, isClose }) {
  
  useEffect((isClose)=>{
    const handlerEsc =(evt)=>{
      if(evt.keyCode===27){
        isClose && isClose();
      }
    }
    document.addEventListener('keydown', handlerEsc);
    return()=>{
      document.removeEventListener('keydown', handlerEsc);
    }
  },[]);

	return isShow ? (
		<SuccesStateWrapper>
			<Button typeOfButton={'close'} onClick={isClose} />
			<Title level={2} $size={36} $margin={20} $align={'center'}>
				{'Спасибо за покупку'}
			</Title>
			<ImageWrapper>
				<img width="50" src={successImg} alt="Иконка успешной покупки" />
			</ImageWrapper>
			<TextWrapper>
				<Paragraph>Вы преобрели билет класса: {type}</Paragraph>
				<Paragraph>Продолжительность посещения: {duration} ч.</Paragraph>
				<Paragraph>Цена билета: {price} руб.</Paragraph>
			</TextWrapper>
			<Button $minWidth={260} onClick={isClose}>
				{'Закрыть'}
			</Button>
		</SuccesStateWrapper>
	) : null;
}
export default SuccesState;
