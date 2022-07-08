import styled from 'styled-components';

const StyledCloseButton = styled.button`
  width: 40px;
  height: 40px;
  box-sizing: border-box; 
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 100%;
  border: none;
  border-radius: 0 ${(props)=>props.theme.borderRadius} 0 50%;
  background: ${(props)=>props.theme.buttonBgColor.default};
  cursor: pointer;
  img {
    width: 15px;
    height: auto;
  }
`;

export {
  StyledCloseButton,
};