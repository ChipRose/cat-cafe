import styled, {css} from 'styled-components';
import Button from '../../ui/button/button.jsx';

const navButton = styled(Button)`
  ${(props) => props.$minWidth
    ? css`
      min-width: ${props.$minWidth}px;
    `
    : css`
      min-width: 100%;
    `
  }
  color: ${(props)=>props.theme.txtColor.main};
  background: none;
  &:hover,
  &:active{
    background: none;
    box-shadow: none;
    text-decoration: underline;
  }
`

export default navButton;