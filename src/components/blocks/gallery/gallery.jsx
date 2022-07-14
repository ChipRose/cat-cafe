import React from 'react';

import { useInfoGallery } from '../../../context/stars-context';
import Slider from '../../ui/slider/slider.jsx';
import Title from '../../ui/title/title';

import { StyledGallery, StyledGalleryWrapper } from './style';
// eslint-disable-next-line
import "swiper/css/bundle";

function Gallery() {

  const gallery = useInfoGallery();

	return (
		<StyledGallery>
			<StyledGalleryWrapper>
				<Title level={1} $size={44} $margin={64} $align={'center'}>
					{'Галерея нашего кафе'}
				</Title>
				<Slider slides={gallery}/>
			</StyledGalleryWrapper>
		</StyledGallery>
	);
}
export default Gallery;
