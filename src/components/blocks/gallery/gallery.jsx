import React from 'react';

import { useInfoGallery } from '../../../context/stars-context';

import { StyledGallery, StyledGalleryWrapper, GalleryTitle } from './style';

function Gallery() {
  const gallery = useInfoGallery();
  console.log(gallery);
	return (
		<StyledGallery>
			<StyledGalleryWrapper>
				<GalleryTitle level={1} size={44}>
					{'Галерея нашего кафе'}
				</GalleryTitle>

				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
				content content content content content content content content content
			</StyledGalleryWrapper>
		</StyledGallery>
	);
}
export default Gallery;
