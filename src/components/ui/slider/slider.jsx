import React, { useState } from 'react';
import SwiperCore, { Virtual } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
	StyledSwiper,
	StyledSwiperPreview,
	StyledMainPhoto,
	StyledPreviewPhoto,
	SliderWrapper,
} from './style.js';

SwiperCore.use([Virtual]);

function Slider({ slides }) {
	const [swiperRef, setSwiperRef] = useState(null);
	const [activeSlide, setActiveSlide] = useState(0);

	const slideTo = (index) => {
		swiperRef.slideTo(index, 0);
	};

	return (
		<>
			<StyledSwiper
				onSwiper={setSwiperRef}
				onSlideChange={(slider) => {
					setActiveSlide(slider.realIndex);
				}}
				slidesPerView={1}
				centeredSlides={true}
				spaceBetween={20}
				pagination={{
					type: 'fraction',
				}}
				navigation={true}
				virtual
			>
				{slides &&
					slides.map(({ src, alt, id }, index) => (
						<SwiperSlide key={id} realIndex={index}>
							<StyledMainPhoto src={src} alt={alt} />
						</SwiperSlide>
					))}
			</StyledSwiper>
			<StyledSwiperPreview slidesPerView={4} spaceBetween={20}>
				{slides.map(({ src, alt, id }, index) => (
					<SwiperSlide
						onClick={() => {
							slideTo(index);
							setActiveSlide(index);
						}}
						key={id}
						virtualIndex={index}
					>
						<StyledPreviewPhoto
							src={src}
							alt={alt}
							$active={activeSlide === id}
						/>
					</SwiperSlide>
				))}
			</StyledSwiperPreview>
		</>
	);
}

export default Slider;
