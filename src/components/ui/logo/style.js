import styled from 'styled-components';

const StyledLogo = styled.a`
  height: 44px;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 0.6;
  }
`;

const StyledImg = styled.img`
  height: 100%;
  margin-right: 24px;
`;

const StyledText = styled.span`
  font-size: 28px;
  line-height: 32.2px;
  color: rgba(51, 51, 51, 1);
`;

export {
  StyledLogo,
  StyledImg,
  StyledText,
};