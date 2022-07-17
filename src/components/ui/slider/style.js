import styled from 'styled-components';
import { Swiper } from "swiper/react";
import Button from '../button/button';

const StyledSwiper = styled(Swiper)`
  width: 726px;
  height: 408px;
  margin-bottom: 20px;
`;

const StyledSwiperPreview = styled(Swiper)`
  width: 726px;
  height: 128px;
`;

const StyledMainPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.borderRadius.photo};
  object-fit: cover;
  cursor: pointer;
`;

const StyledPreviewPhoto = styled.img`
  width: 167px;
  height: 128px;
  border-radius: ${(props) => props.theme.borderRadius.photoPreview};
  filter: brightness(${(props) => (props.$active ? 100 : 50)}%);
  cursor: pointer;
  
`;

const SliderWrapper = styled.div`
  width: 726px;
  margin: 0 auto;
  position: relative;
`;

const ButtonPrev = styled(Button)`  
  position: absolute;
  right: calc(100% + 30px);
  bottom: 35px;
`;

const ButtonNext = styled(Button)`
  position: absolute;
  transform: rotate(180deg);
  left: calc(100% + 30px);
  bottom: 35px;
`;

export {
  StyledSwiper,
  StyledSwiperPreview,
  StyledMainPhoto,
  StyledPreviewPhoto,
  SliderWrapper,
  ButtonNext,
  ButtonPrev,
};