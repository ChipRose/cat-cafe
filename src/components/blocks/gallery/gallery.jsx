import React from 'react';

import { useInfoGallery } from '../../../context/stars-context';
import Slider from '../../ui/slider/slider.jsx';

import { StyledGallery, StyledGalleryWrapper, GalleryTitle } from './style';
// eslint-disable-next-line
import "swiper/css/bundle";

function Gallery() {

  const gallery = useInfoGallery();

	return (
		<StyledGallery>
			<StyledGalleryWrapper>
				<GalleryTitle level={1} size={44}>
					{'Галерея нашего кафе'}
				</GalleryTitle>
				<Slider slides={gallery}/>
			</StyledGalleryWrapper>
		</StyledGallery>
	);
}
export default Gallery;
