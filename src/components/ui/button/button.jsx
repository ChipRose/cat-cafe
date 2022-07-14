import React, { forwardRef } from 'react';

import close from '../../../assets/icons/close.svg';
import arrow from '../../../assets/icons/arrow.svg';

import { StyledButton, StyledSliderButton, StyledCloseButton } from './style';

const Button = forwardRef(({ ...props }, ref) => {
	switch (props.typeOfButton) {
		case 'close':
			return (
				<StyledCloseButton type="button" onClick={props.onClick}>
					<img width="20px" height="20px" src={close} alt="Кнопка закрыть" />
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
					<img width="24px" height="24px" src={arrow} alt="Кнопка слайдера" />
				</StyledSliderButton>
			);
		default:
			return (
				<StyledButton
					{...props}
					{...(props.link
						? { href: props.link }
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
