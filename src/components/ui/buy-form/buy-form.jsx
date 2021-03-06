import React, { useState } from 'react';

import { Fieldset, TimeControl, TypeControl } from '../../styled';
import { useOptionsContext } from '../../../context/buy-options-hook.js';

import Accordion from '../accordion/accordion';
import Button from '../button/button.jsx';
import ControlButton from '../control-button/control-button.jsx';
import SuccessState from '../success-state/succes-state.jsx';

import {
	StyledForm,
	FieldsWrapper,
	StyledLegend,
	StyledDurationList,
	StyledPrice,
} from './style.js';

function BuyForm() {
	const [showMessage, setShowMessage] = useState(false);
	const {
		durationOptions,
		ticketOptions,
		ticketAvailability,
		duration,
		HandlerDurationSelect,
		selectType,
		HandlerTypeSelect,
		priceType,
		price,
	} = useOptionsContext();

	const AccordionContent =
		ticketAvailability &&
		ticketOptions.map((option) => ({
			id: option.id,
			title: (
				<ControlButton
					type={'radio'}
					labelComponent={TypeControl}
					selectValue={selectType}
					value={option.id}
					name={'ticket-type'}
					onChange={HandlerTypeSelect}
				>
					{option.title}
				</ControlButton>
			),
			description: option.description,
		}));

	return ticketAvailability ? (
		<StyledForm
			onSubmit={(evt) => {
				evt.preventDefault();
				setShowMessage(true);
			}}
		>
			<FieldsWrapper>
				<Fieldset $margin={24}>
					<StyledLegend $margin={12}>
						{'Продолжительность (часов)'}
					</StyledLegend>
					<StyledDurationList>
						{durationOptions.length &&
							durationOptions.map((option) => (
								<li key={option}>
									<ControlButton
										type={'radio'}
										labelComponent={TimeControl}
										value={option}
										selectValue={duration}
										name={'duration'}
										onChange={HandlerDurationSelect}
									>
										{option}
									</ControlButton>
								</li>
							))}
					</StyledDurationList>
				</Fieldset>
				<Fieldset $margin={24}>
					<StyledLegend $margin={12}>{'Тип билета'}</StyledLegend>
					<Accordion content={AccordionContent} isHTML />
				</Fieldset>
				<Fieldset>
					<StyledLegend $small $margin={8}>
						{'Цена'}
					</StyledLegend>
					<StyledPrice>{`${price} руб.`}</StyledPrice>
				</Fieldset>
			</FieldsWrapper>
			<Button type={'submit'}>{'Купить билет'}</Button>
			<SuccessState
				type={priceType.title}
				duration={duration}
				price={price}
				isShow={showMessage}
				isClose={() => setShowMessage(false)}
			/>
		</StyledForm>
	) : null;
}

export default BuyForm;
