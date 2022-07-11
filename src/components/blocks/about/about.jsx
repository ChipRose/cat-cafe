import React from 'react';

import Address from '../../ui/address/address.jsx';
import AboutImage from '../../../assets/about/in-a-chair.svg';

import {
	AboutContainer,
	AboutTextBLock,
	AboutTitle,
	AboutInfo,
	AboutText,
	AboutWorkTime,
	AboutImageBlock,
	AboutImg,
} from './style.js';

function About() {
	return (
		<section>
			<AboutContainer>
				<AboutTextBLock>
					<AboutTitle level={1} fontSize={44}>
						{'Первое в России котокафе'}
					</AboutTitle>
					<AboutInfo>
						<AboutText>
              Крупнейшее котокафе России, в котором живёт 50 кошек и котов,
							и каждый из них ищет новый дом. Животных можно гладить,
							фотографировать, играть с ними.
						</AboutText>
					</AboutInfo>
					<AboutWorkTime>Рабочее время с 8:00 до 23:00</AboutWorkTime>
					<Address />
				</AboutTextBLock>
				<AboutImageBlock>
					<AboutImg
						src={AboutImage}
						width="446"
						height="446"
						alt="Девушка в кресле с котом на спинке"
					/>
				</AboutImageBlock>
			</AboutContainer>
		</section>
	);
}

export default About;
