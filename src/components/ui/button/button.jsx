import { StyledButton } from "./style";

function Button({ ...props }) {
  return (
    <StyledButton type={props.type} width={props.minWidth ? `${props.minWidth}px` : "260px"} disabled={props.disabled} className={props.className} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
