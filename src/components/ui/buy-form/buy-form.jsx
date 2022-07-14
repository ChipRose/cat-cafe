import React, { useState } from 'react';

import { Fieldset, TimeControl } from '../../styled';
import { useOptionsContext } from '../../../context/stars-context.js';

import Button from '../button/button.jsx';
import ControlButton from '../control-button/control-button.jsx';

import {
	StyledForm,
	FieldsWrapper,
	StyledLegend,
	StyledDurationList,
	StyledPrice,
} from './style.js';

function BuyForm() {
	const buyOptions = useOptionsContext();
	const { durationOptions } = buyOptions;
	const [duration, setDuration] = useState(durationOptions[0]);

	return (
		<StyledForm>
			<FieldsWrapper>
				<Fieldset $margin={24}>
					<StyledLegend $margin={12}>
						{'Продолжительность (часов)'}
					</StyledLegend>
					<StyledDurationList>
						{durationOptions &&
							durationOptions.map((option) => (
								<li key={option}>
									<ControlButton
										type={'radio'}
										value={option}
										selectValue={duration}
										name={'duration'}
										onChange={evt => setDuration(evt.target.value)}
                    labelComponent={TimeControl}
									>
										{option}
									</ControlButton>
								</li>
							))}
					</StyledDurationList>
				</Fieldset>
				<Fieldset $margin={24}>
					<StyledLegend $margin={12}>{'Тип билета'}</StyledLegend>
				</Fieldset>
				<Fieldset>
					<StyledLegend $small $margin={8}>
						{'Цена'}
					</StyledLegend>
					<StyledPrice>{'300 руб.'}</StyledPrice>
				</Fieldset>
			</FieldsWrapper>
			<Button type={'submit'}>{'Купить билет'}</Button>
		</StyledForm>
	);
}
export default BuyForm;
