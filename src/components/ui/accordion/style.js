import styled from 'styled-components';

import { Ul } from '../../styled/index.js';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding-top: ${(props) => props.theme.indent};
  box-sizing: border-box;
  position: absolute;
  font-size: ${(props) => props.theme.descriptonText.size};
  line-height: ${(props) => props.theme.descriptonText.line};
  ul {
    padding: 5px 0;
    margin: 0;
    list-style: none;
  }
  li{
    padding-left: 15px;
    magin-bottom:  8px;
    position: relative;
    box-sizing: border-box;
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
      background: rgba(51, 51, 51, 1);
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: ${({ isOpen, height }) => `${isOpen ? height : 1}px`};
  overflow: hidden;
  transition: height 0.3s ease-in;
`;

const BuyList = styled(Ul)`
  li {
    margin-bottom: 8px;
  }
`;

const BuyField = styled.li`
  padding: 15px 20px 15px 20px;
  border-radius: ${(props) => props.theme.borderRadius.buy};
  background: ${(props) => props.theme.buttonColor.neutral};
`;

export { TitleWrapper, ContentWrapper, Wrapper, BuyList, BuyField };