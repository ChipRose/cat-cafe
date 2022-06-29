import styled from "styled-components";

function Title({ level, size, children, className }) {
  const StyledTitle = styled[`h${level}`]`
    margin-top: 0;
    padding: 0;
    font-size: ${(props)=>props.fontSize};
    font-weight: 700;
    line-height: 115%;
  `;

  return (
    <StyledTitle fontSize={`${size}px`} className={className}>
      {children}
    </StyledTitle>
  );
}

export default Title;
