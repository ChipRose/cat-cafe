import React, { useRef } from 'react';
import SwiperCore, { Virtual, Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { useInfoGallery } from '../../../context/gallery-hook.js';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
	StyledSwiper,
	StyledSwiperPreview,
	StyledMainPhoto,
	StyledPreviewPhoto,
	SliderWrapper,
	ButtonNext,
	ButtonPrev,
} from './style.js';

SwiperCore.use([Virtual]);

function Slider({ slides }) {
  const { activeSlide, setActiveSlide, setSwiperRef, slideTo} = useInfoGallery();
	
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

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
				virtual
			>
				{slides &&
					slides.map(({ src, alt, id }, index) => (
						<SwiperSlide key={id} virtualIndex={index}>
							<StyledMainPhoto src={src} alt={alt}/>
						</SwiperSlide>
					))}
			</StyledSwiper>
			<SliderWrapper>
				<StyledSwiperPreview
					slidesPerView={4}
					spaceBetween={20}
					modules={[Navigation]}
					pagination={{
						type: 'fraction',
					}}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = navigationPrevRef.current;
						swiper.params.navigation.nextEl = navigationNextRef.current;
					}}
					loop
				>
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
				<ButtonPrev typeOfButton={'slider'} ref={navigationPrevRef} />
				<ButtonNext typeOfButton={'slider'} ref={navigationNextRef} />
			</SliderWrapper>
		</>
	);
}

export default Slider;
