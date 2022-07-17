import React, { forwardRef } from 'react';

import closeImg from '../../../assets/icons/close.svg';
import arrowImg from '../../../assets/icons/arrow.svg';
import arrowDownImg from '../../../assets/icons/down-arrow.svg';

import { StyledButton, StyledSliderButton, StyledCloseButton, AccordionButton } from './style.js';

const Button = forwardRef(({ ...props }, ref) => {
	switch (props.typeOfButton) {
		case 'close':
			return (
				<StyledCloseButton type="button" onClick={props.onClick}>
					<img width="20px" height="20px" src={closeImg} alt="Кнопка закрыть" />
				</StyledCloseButton>
			);
		case 'slider':
			return (
				<StyledSliderButton
					ref={ref}
					type="button"
					onClick={props.onClick}
					className={props.className}
				>
					<img width="24px" height="24px" src={arrowImg} alt="Кнопка слайдера" />
				</StyledSliderButton>
			);
      case 'accordion':
			return (
				<AccordionButton
					type="button"
					onClick={props.onClick}
          {...props}
					className={props.className}
				>
					<img width="16px" height="16px" src={arrowDownImg} alt="Кнопка аккордиона" />
				</AccordionButton>
			);
		default:
			return (
				<StyledButton
					{...props}
					{...(props.link
						? { to: props.link }
						: { as: 'button', type: props.type || 'button' })}
					disabled={props.disabled}
					onClick={props.onClick}
				>
					{props.children}
				</StyledButton>
			);
	}
});

export default Button;
