import styled, {css} from "styled-components";

const TitleBasic = css`
  margin: 0;
  padding: 0;
  font-weight: 700;
  line-height: 115%;
`;

const StyledTitle = styled.h1`
  ${TitleBasic};
  font-size: ${(props)=>`${props.$size}px`};
`;

export { StyledTitle };