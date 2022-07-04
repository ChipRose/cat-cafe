import styled, {css} from 'styled-components';

const StickerBgColor = css`
  background: ${(props) => (props.new ? props.theme.stickerBg.new : props.theme.stickerBg.feature)};
`;

const StyledCardSticker = styled.span`
  ${StickerBgColor}
  padding: 8px 16px;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props)=>props.theme.txtColor.contrast};
  border-radius: 
    ${(props)=>props.theme.borderRadius}
    ${(props)=>props.theme.borderRadius}
    ${(props)=>props.theme.borderRadius}
    0;
`;

export {
  StyledCardSticker,
};