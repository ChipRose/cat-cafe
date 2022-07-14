import React from 'react';

import Address from '../../ui/address/address.jsx';
import aboutImg from '../../../assets/about/in-a-chair.svg';
import Title from '../../ui/title/title.jsx';

import {
	AboutContainer,
	AboutTextBLock,
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
					<Title level={1} $size={44} $margin={20}>
						{'Первое в России котокафе'}
					</Title>
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
						src={aboutImg}
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
