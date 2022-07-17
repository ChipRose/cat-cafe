import React from 'react';

import { useInfoGallery } from '../../../context/gallery-hook.js';
import Slider from '../../ui/slider/slider.jsx';
import Title from '../../ui/title/title.jsx';

import { StyledGallery, StyledGalleryWrapper } from './style.js';
// eslint-disable-next-line
import "swiper/css/bundle";

function Gallery() {

  const {gallery} = useInfoGallery();

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
