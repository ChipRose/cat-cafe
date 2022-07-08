import React from 'react';

import AddressIcn from '../../../assets/icons/map-flag.svg';

import { 
  StyledAddress, 
  AddressImageBlock, 
  AddressIcon 
} from './style.js';

function Address() {
	return (
		<StyledAddress>
			<AddressImageBlock>
				<AddressIcon
					width="16"
					height="17"
					src={AddressIcn}
					alt="Указаталь адреса"
				/>
			</AddressImageBlock>
			<span>Санкт-Петербург, набережная реки Карповки, дом 5, литера П</span>
		</StyledAddress>
	);
}

export default Address;
