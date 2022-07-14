import styled, {css} from "styled-components";

const TitleBasic = css`
  margin: 0;
  padding: 0;
  font-weight: 700;
  line-height: 115%;
`;

const StyledTitle = styled.h1`
  ${TitleBasic};
  margin-bottom: ${(props)=>props.$margin||0}px;
  font-size: ${(props)=>props.$size}px;
  text-align: ${(props)=>props.$align||'left'};
`;

export { StyledTitle };