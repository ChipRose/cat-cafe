import React from 'react';

import { Label, VisuallyHiddenInput } from '../../styled';

function ControlButton({
	type,
	value,
	selectValue,
	name,
	onChange,
  labelComponent,
	children,
	...props
}) {

  const isChecked = Number(selectValue)===value;
  const LabelComponent = labelComponent;

	return (
		<Label>
			<VisuallyHiddenInput
				type={type}
				value={value}
				name={name}
				onChange={onChange}
        checked={isChecked}
			/>
			<LabelComponent $checked={isChecked} {...props}>{children}</LabelComponent>
		</Label>
	);
}
export default ControlButton;
