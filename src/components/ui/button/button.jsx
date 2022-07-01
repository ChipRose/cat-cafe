import { StyledButton } from "./style";

function Button({ ...props }) {
  return (
    <StyledButton type={props.type} width= {props.minWidth ? `${props.minWidth}px`:"260px"} disabled={props.disabled} className={props.className}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
