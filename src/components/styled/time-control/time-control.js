import styled, {css} from 'styled-components';

const TimeControl = styled.span`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props)=>props.theme.borderRadius.main};
  transition: all 0.3s ease-in;
  ${(props)=>props.$checked
  ? css`
    color: ${(props)=>props.theme.txtColor.contrast};
    background: ${(props)=>props.theme.buttonColor.default};
  `
  : css`
    background: ${(props)=>props.theme.buttonColor.neutral};
  `
}
`;

export default TimeControl;