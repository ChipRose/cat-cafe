import styled from 'styled-components';

import { P } from '../../styled/index.js';

const SuccesStateWrapper = styled.div`
  padding: ${(props) => props.theme.indent};
  width: 500px;
  min-height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.bgColor.contrast};
  border-radius: ${(props) => props.theme.borderRadius.main};
  box-shadow: ${(props) => props.theme.mainShadow};
`;

const ImageWrapper = styled.div`
  width: 50px;
  margin-bottom: 20px;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const TextWrapper = styled.div`
  min-width: 100%;
  flex: 1 1 auto;
  margin-bottom: 20px;
`;

const Paragraph = styled(P)`
  margin-bottom: 10px;
  &:last-child{
    margin-bottom: 0;
  }
`;

export { SuccesStateWrapper, ImageWrapper, TextWrapper, Paragraph };